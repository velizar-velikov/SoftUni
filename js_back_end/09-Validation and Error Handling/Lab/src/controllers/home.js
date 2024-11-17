const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.post(
    '/',
    body('email').trim().isEmail().withMessage('Invalid email'),
    body('password').trim().isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    body('repass')
        .trim()
        .custom((value, { req }) => {
            return value == req.body.password;
        })
        .withMessage('Passwords do not match'),
    (req, res) => {
        const result = validationResult(req);
        const errors = Object.fromEntries(result.errors.map((e) => [e.path, e.msg]));
        console.log(req.body);

        if (result.errors.length) {
            res.render('home', { errors, data: req.body });
            return;
        }
        res.redirect('/');
    }
);

module.exports = { router };
