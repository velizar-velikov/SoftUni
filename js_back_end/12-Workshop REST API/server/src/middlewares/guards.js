function isUser() {
    return function (req, res, next) {
        if (!req.user) {
            res.status(401).json({ code: 401, message: 'Invalid or expired token' });
        } else {
            next();
        }
    };
}

module.exports = { isUser };
