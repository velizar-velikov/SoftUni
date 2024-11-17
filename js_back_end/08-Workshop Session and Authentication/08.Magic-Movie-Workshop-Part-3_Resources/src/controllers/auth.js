const { register, login } = require('../services/auth.js');
const { createToken } = require('../services/token.js');

module.exports = {
    login: {
        get: (req, res) => {
            res.render('login');
        },
        post: async (req, res) => {
            const { email, password } = req.body;

            const fieldErrors = {
                email: !email,
                password: !password,
            };

            try {
                if (!email) {
                    throw new Error('Email is required');
                }
                if (!password) {
                    throw new Error('Password is required');
                }
                const user = await login(email, password);

                const token = createToken(user);
                // setting the cookie through the response
                res.cookie('token', token, { httpOnly: true });
            } catch (error) {
                res.render('login', { error: { message: error.message }, fieldErrors, formData: { email } });
                return;
            }
            res.redirect('/');
        },
    },
    register: {
        get: (req, res) => {
            res.render('register');
        },
        post: async (req, res) => {
            const { email, password, 'repeat-password': rePass } = req.body;

            const fieldErrors = {
                email: !email,
                password: !password,
                rePass: !rePass,
            };

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

                const token = createToken(user);
                res.cookie('token', token, { httpOnly: true });
            } catch (error) {
                res.render('register', { error: { message: error.message }, fieldErrors, formData: { email } });
                return;
            }
            res.redirect('/');
        },
    },
    logout: (req, res) => {
        res.clearCookie('token');
        res.redirect('/');
    },
};
