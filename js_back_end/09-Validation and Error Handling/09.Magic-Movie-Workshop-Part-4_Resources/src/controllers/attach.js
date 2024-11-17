const { Router } = require('express');
const { getAllCasts } = require('../services/casts.js');
const { attachCastToMovie } = require('../services/movies.js');
const { isUser } = require('../middlewares/guards.js');
const { preload } = require('../middlewares/preload.js');
const { isOwner } = require('../middlewares/isOwner.js');

const attachCastRouter = Router();

const attachController = {
    get: async (req, res) => {
        const movie = req.data.movie;

        const castInMovie = movie.cast.map((cast) => cast._id.toString());

        const allCasts = await getAllCasts();
        const castsToShow = allCasts.filter(filterCastToShow);

        function filterCastToShow(cast) {
            return !castInMovie.find((castId) => cast._id.toString() == castId);
        }

        res.render('attach-cast', { casts: castsToShow });
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
            const movie = req.data.movie;
            const castInMovie = movie.cast.map((cast) => cast._id.toString());

            const allCasts = await getAllCasts();
            const castsToShow = allCasts.filter(filterCastToShow);

            function filterCastToShow(cast) {
                return !castInMovie.find((castId) => cast._id.toString() == castId);
            }
            res.render('attach-cast', { movie, casts: castsToShow, error: true });

            return;
        }

        try {
            await attachCastToMovie(movieId, castId);
        } catch (error) {
            // we can reload the template with custom error message
            console.error('Error encountered attaching cast to movie', error);
            res.status(400).end();
            return;
        }

        res.redirect(`/details/${movieId}`);
    },
};

attachCastRouter.get('/attach/:id', isUser(), preload(), isOwner(), attachController.get);
attachCastRouter.post('/attach/:id', isUser(), preload(), isOwner(), attachController.post);

module.exports = { attachCastRouter };
