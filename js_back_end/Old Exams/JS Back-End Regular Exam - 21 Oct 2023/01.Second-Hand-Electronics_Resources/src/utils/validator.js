const { body } = require('express-validator');

const validations = {
    login: [body('username').trim(), body('password').trim()],
    register: [
        body('username').trim().isLength({ min: 3 }).withMessage('username must be at least 3 characters long'),
        body('email').trim().isLength({ min: 10 }).isEmail().withMessage('email must be at least 10 characters long'),
        body('password').trim().isLength({ min: 4 }).withMessage('password must be at least 4 characters long'),
        body('repass')
            .trim()
            .custom((value, { req }) => value == req.body.password)
            .withMessage('Passwords must match'),
    ],
    item: [
        body('name').trim().isLength({ min: 2 }).withMessage('name must be at least 2 characters long'),
        body('type').trim().isLength({ min: 3 }).withMessage('type must be at least 3 characters long'),
        body('damages').trim().isLength({ min: 10 }).withMessage('damages must be at least 10 characters long'),
        body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('image must be a valid URL'),
        body('description')
            .trim()
            .isLength({ min: 10, max: 200 })
            .withMessage('description must be between 10 and 200 characters'),
        body('exploitation').trim().isInt({ min: 1 }).withMessage('exploitation must be a positive number'),
        body('price').trim().isFloat({ min: 0.01 }).withMessage('price must be a postitive number'),
    ],
};

function validateInputs(formType) {
    return async function (req, res, next) {
        const formValidations = validations[formType];
        for (const validation of formValidations) {
            await validation.run(req);
        }
        next();
    };
}

module.exports = { validateInputs };
