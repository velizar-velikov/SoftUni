const { Schema, model } = require('mongoose');

const electronicSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    damages: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    production: {
        type: Number,
        required: true,
    },
    exploitation: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    buyingList: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        default: [],
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Electronic = model('Electronic', electronicSchema);

module.exports = { Electronic };
