const { Router } = require('express');
const { homeController, detailsController, searchController } = require('../controllers/catalog.js');
const { aboutController } = require('../controllers/about.js');
const { createController, editController, deleteController } = require('../controllers/movies.js');
const { notFound } = require('../controllers/404.js');
const { createCastController } = require('../controllers/cast.js');
const { attachController } = require('../controllers/attach.js');
const { register, login, logout } = require('../controllers/auth.js');
const { isGuest, isUser } = require('../middlewares/guards.js');

const router = Router();

router.get('/', homeController);
router.get('/about', aboutController);

router.get('/register', isGuest(), register.get);
router.post('/register', isGuest(), register.post);

router.get('/login', isGuest(), login.get);
router.post('/login', isGuest(), login.post);

router.get('/logout', logout);

router.get('/details/:id', isUser(), detailsController);

router.get('/create-movie', isUser(), createController.get);
router.post('/create-movie', isUser(), createController.post);

router.get('/create-cast', isUser(), createCastController.get);
router.post('/create-cast', isUser(), createCastController.post);

router.get('/edit/:id', isUser(), editController.get);
router.post('/edit/:id', isUser(), editController.post);

router.get('/delete/:id', isUser(), deleteController);

router.get('/attach/:id', isUser(), attachController.get);
router.post('/attach/:id', isUser(), attachController.post);

router.get('/search', searchController);

router.get('*', notFound);

module.exports = { router };
