const { Movie } = require('../models/Movie.js');

async function getAllMovies() {
    const movies = await Movie.find({}).lean();

    return movies;
}

async function getMovieById(id) {
    const movie = await Movie.findById(id).lean();

    return movie;
}

async function createMovie(movieData) {
    const movie = {
        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        year: Number(movieData.year),
        rating: Number(movieData.rating),
        description: movieData.description,
        imageURL: movieData.imageURL,
    };

    const createdMovie = await Movie.create(movie);

    return createdMovie;
}

async function searchMovies(search) {
    const foundMovies = await Movie.find({ title: `${search.title}`, genre: `${search.genre}`, year: `${search.year}` }).lean();
    // case-insensitive search
    // const foundMovies = movies.filter(filterMovie);
    // return foundMovies.map(toMovieModel);

    return foundMovies;

    function filterMovie(movie) {
        return (
            movie.title.toLowerCase().startsWith(search.title?.toLowerCase()) &&
            movie.genre.toLowerCase().startsWith(search.genre?.toLowerCase()) &&
            movie.year == search.year
        );
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    searchMovies,
};
