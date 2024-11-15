const { verifyToken } = require('../services/token.js');

const secret = 'top secret';

// pass-through middleware
function session() {
    return function (req, res, next) {
        const token = req.cookies.token;

        if (token) {
            try {
                const payload = verifyToken(token);
                req.user = payload;

                // passing information to handlebars context
                res.locals.hasUser = true;
            } catch (error) {
                // if the token is not verified, it throws an error and we clear the cookie
                res.clearCookie('token');
            }
        }
        next();
    };
}

module.exports = { session };
