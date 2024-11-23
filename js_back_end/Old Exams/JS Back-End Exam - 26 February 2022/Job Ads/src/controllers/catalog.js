const { Router } = require('express');
const { getAllAds, getThreeAds, getAdById, searchForAdsByEmail, getAllAdsByUser } = require('../services/ad.js');
const { isUser } = require('../middlewares/guards.js');

const catalogRouter = Router();

const homeController = async (req, res) => {
    const ads = await getThreeAds();
    for (const ad of ads) {
        ad.applicationsCount = ad.applicants.length;
    }
    res.locals.pageTitle = 'Home Page';
    res.render('home', { ads, page: { home: true } });
};

const catalogController = async (req, res) => {
    const ads = await getAllAds();
    res.locals.pageTitle = 'All Ads Page';
    res.render('catalog', { ads, page: { catalog: true } });
};

const detailsController = async (req, res) => {
    const ad = await getAdById(req.params.id);

    const user = req.user;
    const isAuthor = user && user._id == ad.author._id.toString();

    const canApply = user && !isAuthor && !ad.applicants.find((a) => a._id.toString() == user._id);

    ad.applicationsCount = ad.applicants.length;
    res.locals.pageTitle = 'Ad Details Page';
    res.render('details', { ad, isAuthor, canApply });
};

const searchController = async (req, res) => {
    const email = req.query.email;

    res.locals.pageTitle = 'Search Ads Page';

    if (email) {
        const ads = await searchForAdsByEmail(email);
        res.render('search', { ads, hasSearch: true, page: { search: true } });
    } else {
        res.render('search', { page: { search: true } });
    }
};

const profileController = async (req, res) => {
    const userId = req.user._id;
    const myAds = await getAllAdsByUser(userId);
    res.locals.pageTitle = 'Profile Page';
    res.render('profile', { ads: myAds, page: { profile: true } });
};

catalogRouter.get('/', homeController);
catalogRouter.get('/catalog', catalogController);
catalogRouter.get('/details/:id', detailsController);
catalogRouter.get('/search', searchController);
catalogRouter.get('/profile', isUser(), profileController);

module.exports = { catalogRouter };
