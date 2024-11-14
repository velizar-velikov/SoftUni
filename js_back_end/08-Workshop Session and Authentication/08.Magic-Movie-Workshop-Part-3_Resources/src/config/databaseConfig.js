const mongoose = require('mongoose');
require('../models/User.js');
require('../models/Movie.js');
require('../models/Cast.js');

async function databaseConfig() {
    const connectionStr = 'mongodb://127.0.0.1:27017/movies';

    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to ' + connectionStr);
    });
    mongoose.connection.on('error', (err) => {
        console.log('Mongoose error connection: ' + err);
    });

    await mongoose.connect(connectionStr);
}

module.exports = { databaseConfig };
