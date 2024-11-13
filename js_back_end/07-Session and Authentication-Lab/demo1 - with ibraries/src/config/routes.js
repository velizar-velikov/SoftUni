const { Router } = require('express');
const { homeController } = require('../controllers/home.js');
const { setCookie, getCookie } = require('../controllers/cookie.js');
const { useDark, useLight } = require('../controllers/theme.js');
const { setSession, getSession } = require('../controllers/session.js');

const router = Router();

router.get('/', homeController);

router.get('/set', setCookie);
router.get('/get', getCookie);

router.get('/set-session', setSession);
router.get('/get-session', getSession);

router.get('/use-light', useLight);
router.get('/use-dark', useDark);

module.exports = { router };
