const { Router } = require('express');
const { validationResult } = require('express-validator');
const { cookie_name } = require('../config/config.js');
const { createToken } = require('../services/token.js');
const { register, login } = require('../services/user.js');
const { parseError, validateRegistrationInput } = require('../util.js');
const { isGuest, isUser } = require('../middlewares/guards.js');

const userRouter = Router();

const registerController = {
    get: (req, res) => {
        res.render('register');
    },
    post: async (req, res) => {
        const { email, password, repass, description } = req.body;

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
            console.log(parseError(err).errors);

            res.render('register', { data: req.body, errors: parseError(err).errors });
        }
    },
};
const loginController = {
    get: (req, res) => {
        res.render('login');
    },
    post: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await login(email, password);
            const token = createToken(user);
            res.cookie(cookie_name, token);
            res.redirect('/');
        } catch (err) {
            res.render('login', { data: req.body, errors: parseError(err).errors });
        }
    },
};

const logoutController = async (req, res) => {
    res.clearCookie(cookie_name);
    res.redirect('/');
};

userRouter.get('/register', isGuest(), registerController.get);
userRouter.post('/register', isGuest(), validateRegistrationInput(), registerController.post);
userRouter.get('/login', isGuest(), loginController.get);
userRouter.post('/login', isGuest(), loginController.post);
userRouter.get('/logout', isUser(), logoutController);

module.exports = { userRouter };
