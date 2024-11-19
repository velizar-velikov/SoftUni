const mongoose = require('mongoose');
require('../models/User.js');
require('../models/Stone.js');

async function databaseConfig() {
    const connectionString = 'mongodb://localhost:27017/earth-treasure';
    await mongoose.connect(connectionString);
    console.log('Database connected');
}

module.exports = { databaseConfig };
