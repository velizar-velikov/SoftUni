const { getAllCasts } = require('../services/casts.js');
const { getMovieById, attachCastToMovie } = require('../services/movies.js');

module.exports = {
    attachController: {
        get: async (req, res) => {
            const movieId = req.params.id;
            const movie = await getMovieById(movieId);

            if (!movie) {
                res.render('404');
                return;
            }

            const castInMovie = movie.cast.map((cast) => cast._id.toString());

            const allCasts = await getAllCasts();
            const castsToShow = allCasts.filter(filterCastToShow);

            function filterCastToShow(cast) {
                return !castInMovie.find((castId) => cast._id.toString() == castId);
            }

            res.render('attach-cast', { movie, casts: castsToShow });
        },
        post: async (req, res) => {
            const castId = req.body.cast;
            const movieId = req.params.id;

            if (!movieId || !castId) {
                console.error(`Missing movieId: ${movieId} or castId: ${castId}`);
                res.status(400).end();
                return;
            }

            if (castId == 'none') {
                const movie = await getMovieById(movieId);
                const allCasts = await getAllCasts();
                res.render('attach-cast', { movie, casts: allCasts, error: true });

                return;
            }

            try {
                await attachCastToMovie(movieId, castId);
            } catch (error) {
                console.error('Error encountered attaching cast to movie', error);
                res.status(400).end();
                return;
            }

            res.redirect(`/details/${movieId}`);
        },
    },
};
