const { cookie_name } = require('../config/config.js');
const { verifyToken } = require('../services/token.js');

function session() {
    return function (req, res, next) {
        const token = req.cookies.token;
        if (token) {
            try {
                const payload = verifyToken(token);
                req.user = payload;
                res.locals.hasUser = true;
            } catch (error) {
                res.clearCookie(cookie_name);
            }
        }
        next();
    };
}

module.exports = { session };
