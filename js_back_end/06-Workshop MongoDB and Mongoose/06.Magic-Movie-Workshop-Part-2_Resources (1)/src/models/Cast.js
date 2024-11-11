const {
    Schema,
    model,
    Schema: { Types },
} = require('mongoose');

const CastSchema = new Schema({
    name: {
        type: String,
        required: true,
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
    },
    imageURL: {
        type: String,
        required: true,
    },
    movie: {
        type: Types.ObjectId,
        ref: 'Movie',
    },
});

CastSchema.path('imageURL').validate(function (value) {
    return /^https{0,1}:\/\/.+/.test(value);
}, 'Cast Image must be either http or https type');

const Cast = model('Cast', CastSchema);

module.exports = { Cast };

// name – String, required
// age – Number, required, max and min value
// born – String, required
// name in movie – String, required
// cast image – String, required, http/https validation
// movie – ObjectId, ref Movie Model
