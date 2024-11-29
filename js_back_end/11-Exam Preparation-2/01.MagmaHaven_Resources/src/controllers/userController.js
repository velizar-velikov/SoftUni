const { Router } = require('express');
const { validationResult } = require('express-validator');
const { register, login } = require('../services/userService.js');
const { createToken } = require('../services/token.js');
const { parseError } = require('../util/errorParser.js');
const { isGuest, isUser } = require('../middlewares/guards.js');
const { validateInputs } = require('../util/validator.js');

const userRouter = Router();

const registerController = {
    get: (req, res) => {
        res.render('register');
    },
    post: async (req, res) => {
        const { username, email, password, repass } = req.body;

        const result = await validationResult(req);

        try {
            if (result.errors.length > 0) {
                throw result.errors;
            }
            const user = await register(username, email, password);
            const token = createToken(user);
            // expires in one day after it has been created
            res.cookie('token', token);
            res.redirect('/');
        } catch (err) {
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

        const result = await validationResult(req);

        try {
            const user = await login(email, password);
            const token = createToken(user);
            // expires in one day after it has been created
            res.cookie('token', token);
            res.redirect('/');
        } catch (err) {
            res.render('login', { data: req.body, errors: parseError(err).errors });
        }
    },
};

const logoutController = async (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
};

userRouter.get('/register', isGuest(), registerController.get);
userRouter.post('/register', isGuest(), validateInputs('register'), registerController.post);
userRouter.get('/login', isGuest(), loginController.get);
userRouter.post('/login', isGuest(), loginController.post);
userRouter.get('/logout', isUser(), logoutController);

module.exports = { userRouter };
