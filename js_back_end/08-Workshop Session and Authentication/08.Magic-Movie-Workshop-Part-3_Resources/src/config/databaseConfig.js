const mongoose = require('mongoose');
require('../models/User.js');
require('../models/Movie.js');
require('../models/Cast.js');

async function databaseConfig() {
    const connectionStr = 'mongodb://127.0.0.1:27017/movies';

    await mongoose.connect(connectionStr);

    console.log('Database connected');
}

module.exports = { databaseConfig };
