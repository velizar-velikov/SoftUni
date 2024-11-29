const { body } = require('express-validator');

const validations = {
    register: [
        body('username').trim().isLength({ min: 2 }).withMessage('username must be at least 2 characters long'),
        body('email').trim().isLength({ min: 10 }).isEmail().withMessage('email must be at least 10 characters long'),
        body('password').trim().isLength({ min: 4 }).withMessage('password must be at least 4 characters long'),
        body('repass')
            .trim()
            .custom((value, { req }) => value == req.body.password)
            .withMessage('Passwords must match'),
    ],
    volcano: [
        body('name').trim().isLength({ min: 2 }).withMessage('name must be at least 2 characters long'),
        body('location').trim().isLength({ min: 3 }).withMessage('location must be at least 3 characters long'),
        body('elevation').trim().isInt({ min: 0 }).withMessage('elevation must be a non-negative number'),
        body('lastEruption').trim().isInt({ min: 0, max: 2024 }).withMessage('lastEruption must be between 0 and 2024'),
        body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('image must be a valid URL'),
        body('typeVolcano')
            .trim()
            .isIn(['Supervolcanoes', 'Submarine', 'Subglacial', 'Mud', 'Stratovolcanoes', 'Shield'])
            .withMessage('typeVolcano must be only of the provided types'),
        body('description').trim().isLength({ min: 10 }).withMessage('description must be at least 10 characters long'),
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
