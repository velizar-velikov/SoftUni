const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { isGuest, isUser } = require('../middlewares/guards.js');
const { parseError } = require('../util.js');
const { login, register } = require('../services/auth.js');
const { createToken } = require('../services/token.js');

const userRouter = Router();

const loginController = {
    get: (req, res) => {
        res.render('login');
    },
    post: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await login(email, password);
            const token = createToken(user);
            res.cookie('token', token, { httpOnly: true });
            res.redirect('/');
        } catch (err) {
            res.render('login', { errors: parseError(err).errors, data: { email } });
        }
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
            if (result.errors.length > 0) {
                throw result.errors;
            }

            const user = await register(email, password);
            const token = createToken(user);

            res.cookie('token', token, { httpOnly: true });
            res.redirect('/');
        } catch (err) {
            res.render('register', { errors: parseError(err).errors, data: { email } });
        }
    },
};

const logout = (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
};

userRouter.get('/login', isGuest(), loginController.get);
userRouter.post('/login', isGuest(), loginController.post);
userRouter.get('/register', isGuest(), registerController.get);
userRouter.post(
    '/register',
    isGuest(),
    body('email')
        .trim()
        .isEmail()
        .isLength({ min: 10 })
        .withMessage('Email must be a valid email and at least 10 characters long'),
    body('password').trim().isLength({ min: 4 }).withMessage('Password must be at least 4 characters long'),
    body('repass')
        .trim()
        .custom((value, { req }) => value == req.body.password)
        .withMessage('Passwords must match'),
    registerController.post
);
userRouter.get('/logout', isUser(), logout);

module.exports = { userRouter };
