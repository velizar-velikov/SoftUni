const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { createMovie, editMovie, deleteMovie } = require('../services/movies.js');
const { isUser } = require('../middlewares/guards.js');
const { preload } = require('../middlewares/preload.js');
const { isOwner } = require('../middlewares/isOwner.js');
const { MongooseError } = require('mongoose');
const { parseError } = require('../util.js');

const movieRouter = Router();

const createController = {
    get: (req, res) => {
        res.render('create');
    },
    post: async (req, res) => {
        const userId = req.user._id;

        try {
            const result = validationResult(req);
            if (result.errors.length) {
                // if we throw an error here we do not reach the Mongoose validation
                throw result.errors;
            }
            // creating movie and getting the id from the returned movie
            // if an error occures, we receive a MongooseError
            const { _id } = await createMovie(req.body, userId);
            res.redirect(`/details/${_id}`);
        } catch (err) {
            res.render('create', { movie: req.body, errors: parseError(err).errors });
        }
    },
};

const editController = {
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
};

const deleteController = {
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
};

movieRouter.get('/create-movie', isUser(), createController.get);
movieRouter.post(
    '/create-movie',
    isUser(),
    body('imageURL').trim().isURL().withMessage('Please enter valid URL for movie poster'),
    createController.post
);
movieRouter.get('/edit/:id', isUser(), preload(), isOwner(), editController.get);
movieRouter.post('/edit/:id', isUser(), preload(), isOwner(), editController.post);
movieRouter.get('/delete/:id', isUser(), preload(), isOwner(), deleteController.get);
movieRouter.post('/delete/:id', isUser(), preload(), isOwner(), deleteController.post);

module.exports = { movieRouter };
