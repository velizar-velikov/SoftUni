const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { register, login } = require('../services/auth.js');
const { createToken } = require('../services/token.js');
const { isGuest } = require('../middlewares/guards.js');
const { parseError } = require('../util.js');

const userRouter = Router();

const loginController = {
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
};

const registerController = {
    get: (req, res) => {
        res.render('register');
    },
    post: async (req, res) => {
        const { email, password } = req.body;

        try {
            const result = validationResult(req);

            if (result.errors.length) {
                throw result.errors;
            }

            const user = await register(email, password);

            const token = createToken(user);
            res.cookie('token', token, { httpOnly: true });
        } catch (err) {
            res.render('register', { errors: parseError(err).errors, formData: { email } });
            return;
        }
        res.redirect('/');
    },
};
const logoutController = (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
};

userRouter.get('/register', isGuest(), registerController.get);
userRouter.post(
    '/register',
    isGuest(),
    body('email').trim().isEmail().withMessage('Please enter a valid email'),
    body('password')
        .trim()
        .isAlphanumeric()
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long and may contain only english letters and numbers'),
    body('repass')
        .trim()
        .custom((val, { req }) => val == req.body.password)
        .withMessage('Passwords must match'),
    registerController.post
);

userRouter.get('/login', isGuest(), loginController.get);
userRouter.post('/login', isGuest(), loginController.post);
userRouter.get('/logout', logoutController);

module.exports = { userRouter };
