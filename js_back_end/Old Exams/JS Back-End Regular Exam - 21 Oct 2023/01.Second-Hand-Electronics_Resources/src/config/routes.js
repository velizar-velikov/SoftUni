const { userRouter } = require('../controllers/userController.js');
const { catalogRouter } = require('../controllers/catalogController.js');
const { dataRouter } = require('../controllers/dataController.js');
const { notFound } = require('../controllers/notFound.js');

function routesConfig(app) {
    app.use(userRouter);
    app.use(catalogRouter);
    app.use(dataRouter);
    app.get('*', notFound);
}

module.exports = { routesConfig };
