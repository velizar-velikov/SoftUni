const { urlencoded, static: staticHandler } = require('express');

function configExpress(app) {
    app.use('/static', staticHandler('static'));
    app.use(urlencoded({ extended: true }));
}

module.exports = { configExpress };
