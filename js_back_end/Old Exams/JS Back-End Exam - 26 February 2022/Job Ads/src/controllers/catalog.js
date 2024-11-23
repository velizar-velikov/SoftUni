const { Router } = require('express');
const {
    getAllAds,
    getThreeAds,
    getAdById,
    searchForAdsByEmail,
    getAllAdsByUser,
    getPageAds,
    getAdsCount,
} = require('../services/ad.js');
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
    let page = req.query.page || 1;
    page = Number(page);

    const adsPerPage = 4;
    const totalPages = Math.ceil((await getAdsCount()) / adsPerPage);

    if (!Number.isInteger(page) || page > totalPages || page < 0) {
        res.render('404');
        return;
    }

    const isNotFirstPage = page != 1;
    const isnotLastPage = page != totalPages;

    const pagesArr = [];
    for (let i = 1; i <= totalPages; i++) {
        const pageObj = { num: i, href: `/catalog?page=${i}` };
        if (page == i) {
            pageObj.current = true;
        }
        pagesArr.push(pageObj);
    }

    const pagination = { pages: pagesArr, isNotFirstPage, isnotLastPage };

    if (isNotFirstPage) {
        pagination.back = `/catalog?page=${page - 1}`;
    }
    if (isnotLastPage) {
        pagination.forward = `/catalog?page=${page + 1}`;
    }

    const pageAds = await getPageAds(page, adsPerPage);

    res.locals.pageTitle = 'All Ads Page';
    res.render('catalog', { ads: pageAds, page: { catalog: true }, pagination });
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
