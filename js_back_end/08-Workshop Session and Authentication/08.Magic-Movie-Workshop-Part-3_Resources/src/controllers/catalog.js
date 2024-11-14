const { getAllCasts } = require('../services/casts.js');
const { getAllMovies, getMovieById, searchMovies } = require('../services/movies.js');
const { ifNoUserRedirectToHome } = require('../util.js');

module.exports = {
    homeController: async (req, res) => {
        const { user } = req.session;
        let movies = await getAllMovies();
        console.log({ user });

        movies = movies.map((m) => {
            m.user = user;
            return m;
        });

        res.render('home', { movies, user, title: 'Home Page' });
    },
    detailsController: async (req, res) => {
        const { user } = req.session;

        ifNoUserRedirectToHome(req, res);

        const { id } = req.params;
        const movie = await getMovieById(id);

        if (!movie) {
            res.render('404', { user, title: 'Error Page' });
            return;
        }

        movie.stars = Array(movie.rating).fill('star');

        res.render('details', { user, movie });
    },
    searchController: async (req, res) => {
        const { user } = req.session;
        const query = req.query;

        const allMovies = await getAllMovies();

        // first render of search page || search with all empty fields
        if (Object.keys(query).length == 0 || Object.values(query).every((v) => v === '')) {
            res.render('search', { user, movies: allMovies });
            return;
        }

        // search with some empty fields and some filled
        if (Object.values(query).some((v) => v === '')) {
            res.render('search', { user, movies: allMovies, search: query });
            return;
        }

        // search with all fields filled
        const foundMovies = await searchMovies(query);
        res.render('search', { user, movies: foundMovies });
    },
};
