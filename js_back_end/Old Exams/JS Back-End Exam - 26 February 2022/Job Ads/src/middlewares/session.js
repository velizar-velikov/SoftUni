const { verifyToken } = require('../services/token.js');

function session() {
    return function (req, res, next) {
        const token = req.cookies.token;
        if (token) {
            const payload = verifyToken(token);
            req.user = payload;
            res.locals.hasUser = true;
        }
        next();
    };
}

module.exports = { session };
