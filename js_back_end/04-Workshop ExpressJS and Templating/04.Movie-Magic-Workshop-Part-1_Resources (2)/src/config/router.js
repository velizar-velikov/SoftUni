const { Router } = require('express');
const { homeController, detailsController, searchController } = require('../controllers/catalog.js');
const { aboutController } = require('../controllers/about.js');
const { createController } = require('../controllers/moviesController.js');
const { notFound } = require('../controllers/404.js');

const router = Router();

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/details/:id', detailsController);

router.get('/create', createController.get);
router.post('/create', createController.post);

router.get('/search', searchController);

router.get('*', notFound);

module.exports = { router };
