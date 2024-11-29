const { verifyToken } = require('../services/token.js');

function session() {
    return function (req, res, next) {
        const token = req.cookies?.token;

        if (token) {
            try {
                const data = verifyToken(token);
                req.user = data;
                res.locals.hasUser = true;
            } catch (error) {
                res.clearCookie('token');
            }
        }
        next();
    };
}

module.exports = { session };
