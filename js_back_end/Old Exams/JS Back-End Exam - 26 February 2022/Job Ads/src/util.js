const { body } = require('express-validator');

function parseError(err) {
    if (err instanceof Error) {
        if (!err.errors) {
            err.errors = [err.message];
        } else {
            // Mongoose validation errors here
            const error = new Error('Mongoose error');
            error.errors = Object.fromEntries(Object.values(err.errors).map((e) => [e.path, e.message]));
            return error;
        }
    } else if (Array.isArray(err)) {
        // express-validator error array
        const error = new Error('Input validation errors');
        error.errors = Object.fromEntries(err.map((e) => [e.path, e.msg]));
        return error;
    }
    return err;
}

const validations = {
    ad: [
        body('headline').trim().isLength({ min: 4 }).withMessage('headline must be at least 4 characters long'),
        body('location').trim().isLength({ min: 8 }).withMessage('location must be at least 8 characters long'),
        body('companyName').trim().isLength({ min: 3 }).withMessage('companyName must be at least 3 characters long'),
        body('companyDescription')
            .trim()
            .isLength({ min: 1, max: 40 })
            .withMessage('companyDescription must be between 1 and 40 characters long'),
    ],
    register: [
        body('email').trim().isEmail().withMessage('email must be a valid email'),
        body('password').trim().isLength({ min: 5 }).withMessage('password must be at least 5 characters long'),
        body('repass')
            .trim()
            .custom((value, { req }) => value == req.body.password)
            .withMessage('Passwords must match'),
        body('description')
            .trim()
            .isLength({ min: 1, max: 40 })
            .withMessage('description must be between 1 and 40 characters long'),
    ],
};

function validateAdInput() {
    return async function (req, res, next) {
        for (const validation of validations.ad) {
            await validation.run(req);
        }
        next();
    };
}

function validateRegistrationInput() {
    return async function (req, res, next) {
        for (const validation of validations.register) {
            await validation.run(req);
        }
        next();
    };
}

module.exports = { parseError, validateAdInput, validateRegistrationInput };
