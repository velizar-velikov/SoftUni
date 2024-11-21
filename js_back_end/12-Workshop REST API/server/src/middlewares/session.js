const { verifyToken } = require('../services/token.js');

function session() {
    return function (req, res, next) {
        const token = req.headers['x-authorization'];

        if (token) {
            try {
                const data = verifyToken(token);
                req.user = data;
            } catch (error) {
                res.status(401).json({ code: 401, message: 'invalid or expired token' });
            }
        }
        next();
    };
}

module.exports = { session };
