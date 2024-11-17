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
        author: userId,
    };

    const createdMovie = await Movie.create(movie);

    return createdMovie;
}

async function editMovie(movieId, movieData) {
    //single db request to update
    // runs validations only if explicitly set in the options parameter
    const movie = await Movie.findOneAndUpdate(
        { _id: movieId },
        {
            $set: {
                title: movieData.title,
                genre: movieData.genre,
                director: movieData.director,
                year: movieData.year,
                rating: movieData.rating,
                description: movieData.description,
                imageURL: movieData.imageURL,
            },
        },
        { runValidators: true }
    );

    return movie;
}

async function deleteMovie(id) {
    await Movie.findByIdAndDelete(id);
}

async function searchMovies(search) {
    const foundMovies = await Movie.find({ title: `${search.title}`, genre: `${search.genre}`, year: `${search.year}` }).lean();

    return foundMovies;
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

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    editMovie,
    deleteMovie,
    searchMovies,
    attachCastToMovie,
};
