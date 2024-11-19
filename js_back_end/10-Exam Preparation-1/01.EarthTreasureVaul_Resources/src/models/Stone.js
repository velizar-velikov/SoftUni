const { Schema, model } = require('mongoose');

const stoneSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    formula: {
        type: String,
        required: true,
    },
    description: {
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

const Stone = model('Stone', stoneSchema);

module.exports = { Stone };
