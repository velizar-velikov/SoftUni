function isGuest() {
    return function (req, res, next) {
        if (req.user) {
            res.redirect('/');
        } else {
            next();
        }
    };
}

function isUser() {
    return function (req, res, next) {
        if (!req.user) {
            res.redirect('/login');
        } else {
            next();
        }
    };
}

function isOwner() {
    return function (req, res, next) {
        const stone = req.data.stone;
        const userId = req.user._id;

        if (stone.owner.toString() == userId) {
            stone.isOwner = true;
            next();
        } else {
            res.redirect('/login');
        }
    };
}

module.exports = { isGuest, isUser, isOwner };
