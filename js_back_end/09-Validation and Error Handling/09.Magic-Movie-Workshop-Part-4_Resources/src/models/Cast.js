const {
    Schema,
    model,
    Schema: { Types },
} = require('mongoose');

const CastSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [5, 'Name must be at least 5 characters long'],
        match: [/^[a-z0-9 ]+&/gi, 'Name must be only English letters, numbers and spaces'],
    },
    age: {
        type: Number,
        required: true,
        min: [0, 'Age must be a non-negative number (got {VALUE})'],
        max: [130, 'Age must be no greater than 130 (got {VALUE})'],
    },
    born: {
        type: String,
        required: true,
    },
    nameInMovie: {
        type: String,
        required: true,
        minLength: [5, 'Name In Movie must be at least 5 characters long'],
        match: [/^[a-z0-9 ]+&/gi, 'Name In Movie must be only English letters, numbers and spaces'],
    },
    imageURL: {
        type: String,
        required: true,
        match: [/^https{0,1}:\/\/.+/, 'Cast Image must be of http/https type'],
    },
    movie: {
        type: Types.ObjectId,
        ref: 'Movie',
    },
});

const Cast = model('Cast', CastSchema);

module.exports = { Cast };
