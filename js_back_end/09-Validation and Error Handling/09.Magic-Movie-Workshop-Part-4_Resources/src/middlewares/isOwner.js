function isOwner() {
    return function (req, res, next) {
        const movie = req.data.movie;
        if (movie && movie.author.toString() == req.user._id) {
            res.locals.isOwner = true;
            next();
        } else {
            // error can be thrown and custom message to be shown in the templates
            res.redirect('/');
        }
    };
}

module.exports = { isOwner };
