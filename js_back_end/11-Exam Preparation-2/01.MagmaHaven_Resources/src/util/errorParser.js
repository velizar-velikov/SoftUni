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

module.exports = { parseError };
