const { urlencoded, static: staticHandler } = require('express');

function expressConfig(app) {
    app.use('/static', staticHandler('static'));
    app.use(urlencoded({ extended: true }));
}

module.exports = { expressConfig };
