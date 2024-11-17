const { Schema, SchemaType, model } = require('mongoose');

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        // case insensitive
        collation: { locale: 'en', strength: 2 },
    }
);

const User = model('User', userSchema);

module.exports = { User };
