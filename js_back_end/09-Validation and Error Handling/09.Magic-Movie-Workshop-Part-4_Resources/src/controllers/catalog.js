const { Router } = require('express');
const { getAllMovies, searchMovies } = require('../services/movies.js');
const { preload } = require('../middlewares/preload.js');

const catalogRouter = Router();

const homeController = async (req, res) => {
    const user = req.user;

    let movies = await getAllMovies();

    // map is synchronous, therefore we need to await all of the promises returned
    movies = await Promise.all(
        movies.map(async (m) => {
            m.hasUser = Boolean(user);
            m.isOwner = m.author.toString() == user?._id;
            return m;
        })
    );

    res.render('home', { movies, title: 'Home Page' });
};

const detailsController = async (req, res) => {
    const user = req.user;

    const movie = req.data.movie;

    movie.isOwner = movie.author.toString() == user?._id;

    movie.stars = Array(movie.rating).fill('star');

    res.render('details');
};

const searchController = async (req, res) => {
    const query = req.query;

    const allMovies = await getAllMovies();

    // first render of search page || search with all empty fields
    if (Object.keys(query).length == 0 || Object.values(query).every((v) => v === '')) {
        res.render('search', { movies: allMovies });
        return;
    }

    // search with some empty fields and some filled
    if (Object.values(query).some((v) => v === '')) {
        res.render('search', { movies: allMovies, search: query });
        return;
    }

    // search with all fields filled
    const foundMovies = await searchMovies(query);
    res.render('search', { movies: foundMovies });
};

catalogRouter.get('/', homeController);
catalogRouter.get('/search', searchController);
catalogRouter.get('/details/:id', preload(), detailsController);

module.exports = { catalogRouter };
