const { Movie } = require('../models/Movie.js');

async function getAllMovies() {
    const movies = await Movie.find({}).lean();

    return movies;
}

async function getMovieById(id) {
    const movie = await Movie.findById(id).lean().populate('cast');

    return movie;
}

async function createMovie(movieData, userId) {
    const movie = {
        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        year: Number(movieData.year),
        rating: Number(movieData.rating),
        description: movieData.description,
        imageURL: movieData.imageURL,
        creatorId: userId,
    };

    const createdMovie = await Movie.create(movie);

    return createdMovie;
}

async function editMovie(movieId, movieData) {
    const movie = await Movie.findOne({ _id: movieId });

    if (!movie) {
        throw new Error(`Movie ${movieId} does not exist`);
    }

    movie.title = movieData.title;
    movie.genre = movieData.genre;
    movie.director = movieData.director;
    movie.year = movieData.year;
    movie.rating = movieData.rating;
    movie.description = movieData.description;
    movie.imageURL = movieData.imageURL;

    await movie.save();

    return movie;
}

async function deleteMovie(id) {
    const movie = await Movie.findOne({ _id: id });

    if (!movie) {
        throw new Error(`Movie ${id} does not exist`);
    }

    await Movie.findByIdAndDelete(id);
}

async function searchMovies(search) {
    const foundMovies = await Movie.find({ title: `${search.title}`, genre: `${search.genre}`, year: `${search.year}` }).lean();

    return foundMovies;

    function filterMovie(movie) {
        return (
            movie.title.toLowerCase().startsWith(search.title?.toLowerCase()) &&
            movie.genre.toLowerCase().startsWith(search.genre?.toLowerCase()) &&
            movie.year == search.year
        );
    }
}

async function attachCastToMovie(movieId, castId) {
    const movie = await Movie.findById(movieId);

    if (!movie) {
        throw new Error(`Movie ${movieId} not found.`);
    }

    movie.cast.push(castId);
    movie.save();

    return movie;
}

async function isOwnerOfMovie(movieId, userId) {
    const movie = await Movie.findOne({ _id: movieId });

    if (!movie) {
        return false;
    }

    if (movie.creatorId?.toString() != userId.toString()) {
        return false;
    }

    return true;
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    editMovie,
    deleteMovie,
    searchMovies,
    attachCastToMovie,
    isOwnerOfMovie,
};
