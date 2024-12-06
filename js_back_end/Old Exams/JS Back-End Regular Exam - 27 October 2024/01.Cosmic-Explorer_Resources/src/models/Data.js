const { Schema, model } = require('mongoose');

const dataSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    solarSystem: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['Inner', 'Outer', 'Dwarf'],
        required: true,
    },
    moons: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    rings: {
        type: String,
        enum: ['Yes', 'No'],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    likedList: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        default: [],
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Data = model('Data', dataSchema);

module.exports = { Data };
