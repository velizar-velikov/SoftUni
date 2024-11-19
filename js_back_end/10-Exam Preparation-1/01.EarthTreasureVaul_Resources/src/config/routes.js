const { notFound } = require('../controllers/404.js');
const { userRouter } = require('../controllers/auth.js');
const { catalogRouter } = require('../controllers/catalog.js');
const { stoneRouter } = require('../controllers/stone.js');

function routesConfig(app) {
    app.use(catalogRouter);
    app.use(userRouter);
    app.use(stoneRouter);

    app.get('*', notFound);
}

module.exports = { routesConfig };
