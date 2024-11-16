const { getMovieById } = require('../services/movies.js');

function preload() {
    return async function (req, res, next) {
        const movieId = req.params.id;
        try {
            // db throws error if id cannot be cast to objectId
            const movie = await getMovieById(movieId);
            if (!movie) {
                throw new Error('Movie not found');
            }
            req.data = { movie };
            res.locals.movie = movie;
        } catch (error) {
            res.render('404');
            return;
        }
        next();
    };
}

module.exports = { preload };
