const { body } = require('express-validator');

const validations = {
    register: [
        body('username').trim().isLength({ min: 2, max: 20 }).withMessage('username must be between 2 and 20 characters long'),
        body('email').trim().isLength({ min: 10 }).isEmail().withMessage('email must be at least 10 characters long'),
        body('password').trim().isLength({ min: 4 }).withMessage('password must be at least 4 characters long'),
        body('repass')
            .trim()
            .custom((value, { req }) => value == req.body.password)
            .withMessage('Passwords must match'),
    ],
    item: [
        body('name').trim().isLength({ min: 2 }).withMessage('name must be at least 2 characters long'),
        body('age').trim().isFloat({ min: 0.01 }).withMessage('age must be a positive number'),
        body('solarSystem').trim().isLength({ min: 2 }).withMessage('solarSystem must be at least 2 characters long'),
        body('type').trim().isIn(['Inner', 'Outer', 'Dwarf']).withMessage('type must be one of the provided options'),
        body('moons').trim().isInt({ min: 1 }).withMessage('moons must be a positive number'),
        body('size').trim().isInt({ min: 1 }).withMessage('size must be a positive number'),
        body('rings').trim().isIn(['Yes', 'No']).withMessage('rings must be one of the provided options'),
        body('description')
            .trim()
            .isLength({ min: 10, max: 100 })
            .withMessage('description must be between 10 and 100 characters long'),
        body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('image must be a valid URL'),
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
