const { notFound } = require('../controllers/404.js');
const { adRouter } = require('../controllers/ad.js');
const { catalogRouter } = require('../controllers/catalog.js');
const { userRouter } = require('../controllers/user.js');

function routesConfig(app) {
    app.use(userRouter);
    app.use(catalogRouter);
    app.use(adRouter);
    app.get('*', notFound);
}

module.exports = { routesConfig };
