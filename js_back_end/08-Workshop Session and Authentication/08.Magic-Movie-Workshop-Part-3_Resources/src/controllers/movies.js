const { createMovie, editMovie, getMovieById, isOwnerOfMovie, deleteMovie } = require('../services/movies.js');

module.exports = {
    createController: {
        get: (req, res) => {
            res.render('create');
        },
        post: async (req, res) => {
            const userId = req.user._id;

            const errors = {
                title: !req.body.title,
                genre: !req.body.genre,
                director: !req.body.director,
                year: !req.body.year,
                imageURL: !req.body.imageURL,
                rating: !req.body.rating,
                description: !req.body.description,
            };

            if (Object.values(errors).some((v) => v)) {
                res.render('create', { movie: req.body, errors });
                return;
            }

            // creating movie and getting the id from the returned movie
            const { _id } = await createMovie(req.body, userId);

            res.redirect(`/details/${_id}`);
        },
    },
    editController: {
        get: async (req, res) => {
            res.render('edit');
        },
        post: async (req, res) => {
            const movieId = req.params.id;

            const errors = {
                title: !req.body.title,
                genre: !req.body.genre,
                director: !req.body.director,
                year: !req.body.year,
                imageURL: !req.body.imageURL,
                rating: !req.body.rating,
                description: !req.body.description,
            };

            if (Object.values(errors).some((v) => v)) {
                res.render('edit', { movie: req.body, errors });
                return;
            }

            try {
                await editMovie(movieId, req.body);
            } catch (error) {
                console.log(error.message);
                // we can reload the template with custom error message
                res.render('404');
                return;
            }
            res.redirect(`/details/${movieId}`);
        },
    },
    deleteController: {
        get: (req, res) => {
            res.render('delete');
        },
        post: async (req, res) => {
            const movieId = req.params.id;

            console.log('Delete action');
            try {
                await deleteMovie(movieId);
            } catch (error) {
                res.render('404');
                return;
            }
            res.redirect('/');
        },
    },
};
