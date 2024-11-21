const { body } = require('express-validator');

function parseError(err) {
    if (err instanceof Error) {
        if (!err.errors) {
            err.errors = [err.message];
        } else {
            // Mongoose validation errors here
            const error = new Error('Mongoose error');
            error.errors = Object.fromEntries(Object.values(err.errors).map((e) => [e.path, e.message]));
            error.message = Object.values(error.errors).join('\n');

            return error;
        }
    } else if (Array.isArray(err)) {
        // express-validator error array
        const error = new Error('Input validation errors');
        error.errors = Object.fromEntries(err.map((e) => [e.path, e.msg]));
        error.message = Object.values(error.errors).join('\n');

        return error;
    }
    return err;
}

const validations = [
    body('make').trim().isLength({ min: 4 }).withMessage('make must be at least 4 characters long'),
    body('model').trim().isLength({ min: 4 }).withMessage('model must be at least 4 characters long'),
    body('year').trim().isInt({ min: 1950, max: 2050 }).withMessage('year must be between 1950 and 2050'),
    body('price').trim().isFloat({ min: 0.01 }).withMessage('price must be a positive number'),
    body('img').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('image must be a valid URL'),
    body('material').trim(),
];

function validateFurnitureInput() {
    return async function (req, res, next) {
        for (const validation of validations) {
            await validation.run(req);
        }
        next();
    };
}

module.exports = { parseError, validateFurnitureInput };
