const { urlencoded, static: staticHandler } = require('express');
const cookieParser = require('cookie-parser');
const { session } = require('../middlewares/session.js');

const secret = 'cookie secret';
function expressConfig(app) {
    app.use(cookieParser(secret));
    app.use(session());
    app.use('/static', staticHandler('static'));
    app.use(urlencoded({ extended: true }));
}

module.exports = { expressConfig };
