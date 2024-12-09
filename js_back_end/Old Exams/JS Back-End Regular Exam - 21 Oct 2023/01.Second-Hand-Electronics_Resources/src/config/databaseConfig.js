const mongoose = require('mongoose');
require('../models/User.js');
require('../models/Electronics.js');

async function connectDatabase() {
    // TODO: implement custom db string
    const connectionString = 'mongodb://localhost:27017/electronics';

    mongoose.connection.on('connected', () => console.log(`Database connected to ${connectionString}`));
    mongoose.connection.on('error', () => console.log('Error occured connecting to ' + connectionString));

    await mongoose.connect(connectionString);
}

module.exports = { connectDatabase };
