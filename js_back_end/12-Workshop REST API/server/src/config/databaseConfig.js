const mongoose = require('mongoose');
require('../models/User.js');
require('../models/Furniture.js');

function databaseConfig() {
    const connectionString = 'mongodb://localhost:27017/furniture';
    mongoose.connect(connectionString);
    console.log('Database connected');
}

module.exports = { databaseConfig };
