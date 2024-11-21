const { Router } = require('express');
const { userRouter } = require('../controllers/user.js');
const { catalogRouter } = require('../controllers/catalog.js');

function routesConfig(app) {
    app.use('/users', userRouter);
    app.use('/data/catalog', catalogRouter);
}

module.exports = { routesConfig };
