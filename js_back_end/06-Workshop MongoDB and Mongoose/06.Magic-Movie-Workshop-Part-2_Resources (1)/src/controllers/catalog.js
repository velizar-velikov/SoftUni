const { getAllCasts } = require('../services/casts.js');
const { getAllMovies, getMovieById, searchMovies } = require('../services/movies.js');

module.exports = {
    homeController: async (req, res) => {
        const movies = await getAllMovies();

        res.render('home', { movies, title: 'Home Page' });
    },
    detailsController: async (req, res) => {
        const { id } = req.params;
        const movie = await getMovieById(id);

        console.log(movie);

        if (!movie) {
            res.render('404', { casts: movie.cast, title: 'Error Page' });
            return;
        }

        movie.stars = Array(movie.rating).fill('star');

        res.render('details', movie);
    },
    searchController: async (req, res) => {
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
    },
};
