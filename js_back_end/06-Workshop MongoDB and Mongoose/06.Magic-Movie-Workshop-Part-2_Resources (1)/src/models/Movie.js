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
        maxLength: [500, 'Description must be no more than 80 characters, got {VALUE}'],
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
});

MovieSchema.path('imageURL').validate(function (value) {
    return /^https{0,1}:\/\/.+/.test(value);
}, 'Image url must be either http or https type');

const Movie = model('Movie', MovieSchema);

// title – String, required V
// genre – String, required V
// director – String, required V
// year – Number, required, max and min value V
// rating – Number, required, max and min value V
// description – String, required, max length validation V
// imageURL – String, required, http/https validation V
// cast – a collection of ObjectIds, ref Cast Model V

module.exports = { Movie };
