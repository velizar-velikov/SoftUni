const { getMovieById } = require('../services/movies.js');

function preload() {
    return async function (req, res, next) {
        const movieId = req.params.id;
        const movie = await getMovieById(movieId);
        if (movie) {
            req.data = { movie };
            res.locals.movie = movie;
        }
        next();
    };
}

module.exports = { preload };
