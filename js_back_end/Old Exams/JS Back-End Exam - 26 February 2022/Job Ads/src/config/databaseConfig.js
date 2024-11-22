const mongoose = require('mongoose');
const { db_connection } = require('./config.js');
require('../models/User.js');
require('../models/Ad.js');

async function databaseConfig() {
    mongoose.connection.on('connected', () => console.log(`Database connected to ${db_connection}`));
    mongoose.connection.on('error', () => console.log(`Error occured connecting database ${db_connection}`));

    await mongoose.connect(db_connection);
}

module.exports = { databaseConfig };
