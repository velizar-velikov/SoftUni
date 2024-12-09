const { urlencoded, static: staticHandler } = require('express');
const cookieParser = require('cookie-parser');
const { session } = require('../middlewares/session.js');

function configExpress(app) {
    app.use(cookieParser());
    app.use(session());
    app.use('/css', staticHandler('css'));
    app.use('/image', staticHandler('image'));
    app.use(urlencoded({ extended: true }));
}

module.exports = { configExpress };
