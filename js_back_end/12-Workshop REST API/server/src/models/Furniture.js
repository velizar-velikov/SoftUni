const { Schema, model } = require('mongoose');

const furnitureSchema = new Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    material: {
        type: String,
    },
    _ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Furniture = model('Furniture', furnitureSchema);

module.exports = { Furniture };
