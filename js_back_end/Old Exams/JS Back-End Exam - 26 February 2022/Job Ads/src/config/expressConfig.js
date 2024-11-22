const cookieParser = require('cookie-parser');
const { static: staticHandler } = require('express');
const { urlencoded } = require('express');
const { session } = require('../middlewares/session.js');

function expressConfig(app) {
    app.use(cookieParser());
    app.use(session());
    app.use('/static', staticHandler('static'));
    app.use(urlencoded({ extended: true }));
}

module.exports = { expressConfig };
