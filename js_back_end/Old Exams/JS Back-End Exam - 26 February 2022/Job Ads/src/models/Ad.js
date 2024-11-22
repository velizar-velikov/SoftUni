const { Schema, model } = require('mongoose');

const adSchema = new Schema({
    headline: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    companyDescription: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    applicants: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        required: true,
        default: [],
    },
});

const Ad = model('Ad', adSchema);

module.exports = { Ad };
