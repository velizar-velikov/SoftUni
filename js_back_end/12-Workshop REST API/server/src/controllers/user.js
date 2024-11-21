const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { register, login } = require('../services/user.js');
const { createToken } = require('../services/token.js');
const { parseError } = require('../util.js');

const userRouter = Router();

const registerController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = validationResult(req);

        if (result.errors.length > 0) {
            throw result.errors;
        }

        const user = await register(email, password);
        console.log('Created new user ' + email);

        const accessToken = createToken(user);
        res.json({ _id: user._id, email, accessToken });
    } catch (err) {
        res.status(400).json({ code: 400, message: parseError(err).message });
    }
};
const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await login(email, password);
        console.log(`${email} logged in successfully`);

        const accessToken = createToken(user);
        res.json({ _id: user._id, email, accessToken });
    } catch (err) {
        res.status(400).json({ code: 400, message: parseError(err).message });
    }
};

const logoutController = (req, res) => {
    res.status(204).json({ code: 204, message: 'Successful request' });
};

userRouter.post(
    '/register',
    body('email').trim().isEmail().isLength({ min: 5 }).withMessage('Email must be a valid email and at least 5 characters long'),
    body('password').trim().isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    registerController
);
userRouter.post('/login', loginController);
userRouter.get('/logout', logoutController);

module.exports = { userRouter };
