const { Router } = require('express');
const { getAllAds, getThreeAds, getAdById, searchForAdsByEmail } = require('../services/ad.js');

const catalogRouter = Router();

const homeController = async (req, res) => {
    const ads = await getThreeAds();
    for (const ad of ads) {
        ad.applicationsCount = ad.applicants.length;
    }
    res.render('home', { ads });
};

const catalogController = async (req, res) => {
    const ads = await getAllAds();
    res.render('catalog', { ads });
};

const detailsController = async (req, res) => {
    const ad = await getAdById(req.params.id);

    const user = req.user;
    const isAuthor = user && user._id == ad.author._id.toString();

    const canApply = user && !isAuthor && !ad.applicants.find((a) => a._id.toString() == user._id);

    ad.applicationsCount = ad.applicants.length;

    res.render('details', { ad, isAuthor, canApply });
};

const searchController = async (req, res) => {
    const email = req.query.email;
    console.log(req.query);

    if (email) {
        const ads = await searchForAdsByEmail(email);
        res.render('search', { ads, hasSearch: true });
    } else {
        res.render('search');
    }
};

catalogRouter.get('/', homeController);
catalogRouter.get('/catalog', catalogController);
catalogRouter.get('/details/:id', detailsController);
catalogRouter.get('/search', searchController);

module.exports = { catalogRouter };
