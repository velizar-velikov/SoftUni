const { register, login } = require('../services/auth.js');

module.exports = {
    login: {
        get: (req, res) => {
            const { user, error, fieldErrors, formData } = req.session;

            if (user) {
                res.redirect('/');
                return;
            }

            delete req.session.error;
            delete req.session.formData;
            delete req.session.fieldErrors;

            res.render('login', { error, fieldErrors, formData });
        },
        post: async (req, res) => {
            const { email, password } = req.body;

            const fieldErrors = {
                email: !email,
                password: !password,
            };
            req.session.fieldErrors = fieldErrors;
            try {
                if (!email) {
                    throw new Error('Email is required');
                }
                if (!password) {
                    throw new Error('Password is required');
                }
                const user = await login(email, password);
                req.session.user = user;
            } catch (error) {
                req.session.error = {
                    type: 'login',
                    message: error.message,
                };
                req.session.formData = { email };
                res.redirect('/login');
                return;
            }
            res.redirect('/');
        },
    },
    register: {
        get: (req, res) => {
            const { user, error, fieldErrors, formData } = req.session;

            if (user) {
                res.redirect('/');
                return;
            }

            delete req.session.error;
            delete req.session.formData;
            delete req.session.fieldErrors;

            res.render('register', { error, fieldErrors, formData });
        },
        post: async (req, res) => {
            const { email, password, 'repeat-password': rePass } = req.body;

            const fieldErrors = {
                email: !email,
                password: !password,
                rePass: !rePass,
            };
            req.session.fieldErrors = fieldErrors;
            try {
                if (!email) {
                    throw new Error('Email is required');
                }
                if (!password) {
                    throw new Error('Password is required');
                }
                if (password != rePass) {
                    throw new Error('Passwords must match');
                }
                const user = await register(email, password);
                req.session.user = user;
            } catch (error) {
                req.session.error = {
                    type: 'register',
                    message: error.message,
                };
                req.session.formData = { email };
                res.redirect('/register');
                return;
            }
            res.redirect('/');
        },
    },
    logout: (req, res) => {
        req.session.user = undefined;
        res.redirect('/');
    },
};
