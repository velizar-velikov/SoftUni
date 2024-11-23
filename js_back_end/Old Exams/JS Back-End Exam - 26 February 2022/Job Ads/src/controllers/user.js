const { Router } = require('express');
const { validationResult } = require('express-validator');
const { cookie_name } = require('../config/config.js');
const { createToken } = require('../services/token.js');
const { register, login, getUser, updateUser } = require('../services/user.js');
const { parseError, validateRegistrationInput } = require('../util.js');
const { isGuest, isUser } = require('../middlewares/guards.js');

const userRouter = Router();

const registerController = {
    get: (req, res) => {
        res.locals.pageTitle = 'Register Page';
        res.render('register', { page: { register: true } });
    },
    post: async (req, res) => {
        const { email, password, description } = req.body;

        try {
            const result = validationResult(req);
            if (result.errors.length > 0) {
                throw result.errors;
            }
            const user = await register(email, password, description);
            const token = createToken(user);
            res.cookie(cookie_name, token);
            res.redirect('/');
        } catch (err) {
            res.locals.pageTitle = 'Register Page';
            res.render('register', { data: req.body, errors: parseError(err).errors, page: { register: true } });
        }
    },
};
const loginController = {
    get: (req, res) => {
        res.locals.pageTitle = 'Login Page';
        res.render('login', { page: { login: true } });
    },
    post: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await login(email, password);
            const token = createToken(user);
            res.cookie(cookie_name, token);
            res.redirect('/');
        } catch (err) {
            res.locals.pageTitle = 'Login Page';
            res.render('login', { data: req.body, errors: parseError(err).errors, page: { login: true } });
        }
    },
};

const logoutController = async (req, res) => {
    res.clearCookie(cookie_name);
    res.redirect('/');
};

const editProfileController = {
    get: async (req, res) => {
        const user = await getUser(req.user._id);
        res.locals.pageTitle = 'Edit Profile Page';
        res.render('editProfile', { data: user });
    },
    post: async (req, res) => {
        const { email, password, description } = req.body;

        try {
            const result = validationResult(req);
            if (result.errors.length > 0) {
                throw result.errors;
            }
            const user = await updateUser(req.user._id, { email, password, description });
            const token = createToken(user);
            res.cookie(cookie_name, token);
            res.redirect('/profile');
        } catch (err) {
            res.locals.pageTitle = 'Edit Profile Page';
            res.render('editProfile', { data: req.body, errors: parseError(err).errors });
        }
    },
};

userRouter.get('/register', isGuest(), registerController.get);
userRouter.post('/register', isGuest(), validateRegistrationInput(), registerController.post);
userRouter.get('/login', isGuest(), loginController.get);
userRouter.post('/login', isGuest(), loginController.post);
userRouter.get('/logout', isUser(), logoutController);
userRouter.get('/profile/edit', isUser(), editProfileController.get);
userRouter.post('/profile/edit', isUser(), validateRegistrationInput(), editProfileController.post);

module.exports = { userRouter };
