const { createMovie, editMovie, getMovieById, isOwnerOfMovie, deleteMovie } = require('../services/movies.js');
const { ifNoUserRedirectToHome } = require('../util.js');

module.exports = {
    createController: {
        get: (req, res) => {
            const { user } = req.session;

            ifNoUserRedirectToHome(req, res);

            res.render('create', { user });
        },
        post: async (req, res) => {
            const { user } = req.session;

            ifNoUserRedirectToHome(req, res);

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
            const { _id } = await createMovie(req.body, user._id);

            res.redirect(`/details/${_id}`);
        },
    },
    editController: {
        get: async (req, res) => {
            const { user } = req.session;
            ifNoUserRedirectToHome(req, res);

            const movieId = req.params.id;

            const isOwner = await isOwnerOfMovie(movieId, user._id);

            if (!isOwner) {
                res.render('404', { user });
                return;
            }

            const movie = await getMovieById(movieId);

            res.render('edit', { user, movie });
        },
        post: async (req, res) => {
            const { user } = req.session;

            ifNoUserRedirectToHome(req, res);

            const movieId = req.params.id;
            const userId = user._id;

            const isOwner = await isOwnerOfMovie(movieId, userId);

            if (!isOwner) {
                res.render('404', { user });
                return;
            }

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
                res.render(`/edit/${movieId}`, { movie: req.body, errors });
                return;
            }

            try {
                await editMovie(movieId, req.body);
            } catch (error) {
                console.log(error.message);
                res.render('404');
                return;
            }
            res.redirect(`/details/${movieId}`);
        },
    },
    deleteController: async (req, res) => {
        const { user } = req.session;

        ifNoUserRedirectToHome(req, res);

        const movieId = req.params.id;
        const isOwner = await isOwnerOfMovie(movieId, user._id);

        if (!isOwner) {
            res.render('404', { user });
            return;
        }

        console.log('Delete action');
        // delete movie from db
        try {
            await deleteMovie(movieId);
        } catch (error) {
            res.render('404');
            return;
        }
        // redirect to home
        res.redirect('/');
    },
};
