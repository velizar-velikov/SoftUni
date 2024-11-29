const mongoose = require('mongoose');
require('../models/User.js');
require('../models/Volcano.js');

async function connectDatabase() {
    const connectionString = 'mongodb://localhost:27017/magma_heaven';

    mongoose.connection.on('connected', () => console.log(`Database connected to ${connectionString}`));
    mongoose.connection.on('error', () => console.log('Error occured connecting to ' + connectionString));

    await mongoose.connect(connectionString);
}

module.exports = { connectDatabase };
