const { urlencoded, static: staticHandler } = require('express');
const cookieParser = require('cookie-parser');
const { session } = require('../middlewares/session.js');

function configExpress(app) {
    app.use(cookieParser());
    app.use(session());
    app.use('/static', staticHandler('static'));
    app.use(urlencoded({ extended: true }));
}

module.exports = { configExpress };
