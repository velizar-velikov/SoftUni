const {
    Schema,
    model,
    Schema: { Types },
} = require('mongoose');

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
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
        maxLength: [500, 'Description must be no more than 500 characters, got {VALUE}'],
    },
    imageURL: {
        type: String,
        required: true,
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

MovieSchema.path('imageURL').validate(function (value) {
    return /^https{0,1}:\/\/.+/.test(value);
}, 'Image url must be either http or https type');

const Movie = model('Movie', MovieSchema);

module.exports = { Movie };
