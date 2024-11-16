const { Router } = require('express');
const { homeController, detailsController, searchController } = require('../controllers/catalog.js');
const { aboutController } = require('../controllers/about.js');
const { createController, editController, deleteController } = require('../controllers/movies.js');
const { notFound } = require('../controllers/404.js');
const { createCastController } = require('../controllers/cast.js');
const { attachController } = require('../controllers/attach.js');
const { register, login, logout } = require('../controllers/auth.js');
const { isGuest, isUser } = require('../middlewares/guards.js');
const { preload } = require('../middlewares/preload.js');
const { isOwner } = require('../middlewares/isOwner.js');

const router = Router();

// no restricted access
router.get('/', homeController);
router.get('/about', aboutController);
router.get('/search', searchController);

// authentication needed
router.get('/register', isGuest(), register.get);
router.post('/register', isGuest(), register.post);
router.get('/login', isGuest(), login.get);
router.post('/login', isGuest(), login.post);
router.get('/logout', logout);
router.get('/details/:id', isUser(), detailsController);

// authentication needed
router.get('/create-movie', isUser(), createController.get);
router.post('/create-movie', isUser(), createController.post);
router.get('/create-cast', isUser(), createCastController.get);
router.post('/create-cast', isUser(), createCastController.post);

// authorization needed
router.get('/edit/:id', isUser(), preload(), isOwner(), editController.get);
router.post('/edit/:id', isUser(), preload(), isOwner(), editController.post);
router.get('/delete/:id', isUser(), preload(), isOwner(), deleteController);
router.get('/attach/:id', isUser(), preload(), isOwner(), attachController.get);
router.post('/attach/:id', isUser(), preload(), isOwner(), attachController.post);

router.get('*', notFound);

module.exports = { router };
