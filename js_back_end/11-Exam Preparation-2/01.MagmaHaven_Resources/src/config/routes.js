const { userRouter } = require('../controllers/userController.js');
const { catalogRouter } = require('../controllers/catalogController.js');
const { volcanoRouter } = require('../controllers/volcanoController.js');
const { notFound } = require('../controllers/notFound.js');

function routesConfig(app) {
    app.use(userRouter);
    app.use(catalogRouter);
    app.use(volcanoRouter);
    app.get('*', notFound);
}

module.exports = { routesConfig };
