const { login, register, getUserData } = require('../services/auth.js');

module.exports = {
    details: async (req, res) => {
        const userData = await getUserData();
        res.json(userData);
    },
    login: {
        get: (req, res) => {
            const error = req.session.error;
            delete req.session.error;
            res.render('login', { error });
        },
        post: async (req, res) => {
            const { username, password } = req.body;

            try {
                const user = await login(username, password);
                req.session.user = user;

                res.redirect('/');
            } catch (error) {
                req.session.error = {
                    type: 'login',
                    message: error.message,
                };
                res.redirect('/login');
                return;
            }
        },
    },
    register: {
        get: (req, res) => {
            const error = req.session.error;
            const formData = req.session.formData;

            delete req.session.error;
            delete req.session.formData;

            res.render('register', { error, formData });
        },
        post: async (req, res) => {
            const { username, password, repass } = req.body;

            try {
                if (!username) {
                    throw new Error('Username is required');
                }

                if (!password) {
                    throw new Error('Password is required');
                }

                if (password != repass) {
                    // eslint-disable-next-line quotes
                    throw new Error("Passwords don't match!");
                }

                const user = await register(username, password);
                req.session.user = user;
                res.redirect('/');
            } catch (error) {
                req.session.error = {
                    type: 'register',
                    message: error.message,
                };
                req.session.formData = { username };
                res.redirect('/register');
                return;
            }
        },
    },
    logout: {
        get: (req, res) => {
            req.session.user = undefined;

            res.redirect('/');
        },
    },
};
