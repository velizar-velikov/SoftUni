const { catalogRouter } = require('../controllers/catalog.js');
const { userRouter } = require('../controllers/auth.js');
const { movieRouter } = require('../controllers/movies.js');
const { createCastRouter } = require('../controllers/cast.js');
const { attachCastRouter } = require('../controllers/attach.js');
const { notFound } = require('../controllers/404.js');
const { aboutController } = require('../controllers/about.js');

function configRoutes(app) {
    app.use(catalogRouter);
    app.use(userRouter);
    app.use(movieRouter);
    app.use(createCastRouter);
    app.use(attachCastRouter);

    app.get('/about', aboutController);
    app.get('*', notFound);
}

module.exports = { configRoutes };
