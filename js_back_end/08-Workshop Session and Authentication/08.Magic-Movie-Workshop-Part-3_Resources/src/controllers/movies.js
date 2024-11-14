const { createMovie } = require('../services/movies.js');

module.exports = {
    createController: {
        get: (req, res) => {
            const { user } = req.session;
            res.render('create', { user });
        },
        post: async (req, res) => {
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
            const { _id } = await createMovie(req.body);

            res.redirect(`/details/${_id}`);
        },
    },
    editController: {
        get: (req, res) => {
            const { user } = req.session;
            const movieId = req.params.id;
            res.render('edit', { user });
        },
        post: (req, res) => {
            // post request
        },
    },
    deleteController: (req, res) => {
        const movieId = req.params.id;
        console.log('Delete action');
        // delete movie from db
        // redirect to home
        res.redirect('/');
    },
};
