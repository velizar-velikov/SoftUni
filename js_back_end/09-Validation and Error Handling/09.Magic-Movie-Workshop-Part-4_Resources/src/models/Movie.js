const {
    Schema,
    model,
    Schema: { Types },
} = require('mongoose');

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, 'Title must be at least 5 characters long'],
        match: [/^[a-z0-9 ]+&/gi, 'Title must be only English letters, numbers and spaces'],
    },
    genre: {
        type: String,
        required: true,
        minLength: [5, 'Genre must be at least 5 characters long'],
        match: [/^[a-z0-9 ]+&/gi, 'Genre must be only English letters, numbers and spaces'],
    },
    director: {
        type: String,
        required: true,
        minLength: [5, 'Director must be at least 5 characters long'],
        match: [/^[a-z0-9 ]+&/gi, 'Director must be only English letters, numbers and spaces'],
    },
    year: {
        type: Number,
        required: true,
        min: [1900, 'Year must be greater than or equal to 1900 (got {VALUE})'],
        max: [2024, 'Year must be no greater than 2024 (got {VALUE})'],
    },
    rating: {
        type: Number,
        required: true,
        min: [1, 'Rating must be 1 or more (got {VALUE})'],
        max: [5, 'Rating must be no more than 5 (got {VALUE})'],
    },
    description: {
        type: String,
        required: true,
        minLength: [20, 'Description must be at least 20 characters long'],
        maxLength: [500, 'Description must be no more than 500 characters, got {VALUE}'],
        match: [/^[a-z0-9 ]+&/gi, 'Description must be only English letters, numbers and spaces'],
    },
    imageURL: {
        type: String,
        required: true,
        match: [/^https{0,1}:\/\/.+/, 'ImageURL must be of http/https type'],
    },
    cast: {
        type: [Types.ObjectId],
        ref: 'Cast',
        default: [],
    },
    author: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Movie = model('Movie', MovieSchema);

module.exports = { Movie };
