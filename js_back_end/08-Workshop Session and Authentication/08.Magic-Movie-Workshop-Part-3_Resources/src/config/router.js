const { Router } = require('express');
const { homeController, detailsController, searchController } = require('../controllers/catalog.js');
const { aboutController } = require('../controllers/about.js');
const { createController, editController, deleteController } = require('../controllers/movies.js');
const { notFound } = require('../controllers/404.js');
const { createCastController } = require('../controllers/cast.js');
const { attachController } = require('../controllers/attach.js');
const { register, login, logout } = require('../controllers/auth.js');

const router = Router();

router.get('/', homeController);
router.get('/about', aboutController);

router.get('/register', register.get);
router.post('/register', register.post);

router.get('/login', login.get);
router.post('/login', login.post);

router.get('/logout', logout);

router.get('/details/:id', detailsController);

router.get('/create-movie', createController.get);
router.post('/create-movie', createController.post);

router.get('/create-cast', createCastController.get);
router.post('/create-cast', createCastController.post);

router.get('/edit/:id', editController.get);
router.post('/edit/:id', editController.post);

router.get('/delete/:id', deleteController);

router.get('/attach/:id', attachController.get);
router.post('/attach/:id', attachController.post);

router.get('/search', searchController);

router.get('*', notFound);

module.exports = { router };
