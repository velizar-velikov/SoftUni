const { Router } = require('express');
const {
    getAllAds,
    getThreeAds,
    getAdById,
    searchForAdsByEmail,
    getAllAdsByUser,
    getPageAds,
    getAdsCount,
    getDistinctField,
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

    let { location, company, sortBy } = req.query;

    const adsPerPage = 4;
    let adsCount;
    const filter = {};
    if (location) {
        filter.location = location;
    }
    if (company) {
        filter.company = company;
    }

    const pageAds = await getPageAds(page, adsPerPage);
    console.log(pageAds.length);

    const totalPages = Math.ceil((await getAdsCount(filter)) / adsPerPage);
    if (!Number.isInteger(page) || page > totalPages || page < 0) {
        res.render('404');
        return;
    }

    const pagesArr = [];
    for (let i = 1; i <= totalPages; i++) {
        const pageObj = { num: i, href: `/catalog?page=${i}` };
        if (req.query.location) {
            if (req.query.page) {
                pageObj.href = req.url.slice(0, -1) + i;
            } else {
                pageObj.href = `${req.url}&page=${i}`;
            }
        } else {
            pageObj.href = `/catalog?page=${i}`;
        }
        if (page == i) {
            pageObj.current = true;
        }
        pagesArr.push(pageObj);
    }
    const isNotFirstPage = page != 1;
    const isnotLastPage = page != totalPages;

    const pagination = { pages: pagesArr, isNotFirstPage, isnotLastPage };
    const filterOptions = { company: await getDistinctField('companyName'), location: await getDistinctField('location') };

    if (isNotFirstPage) {
        pagination.back = `/catalog?page=${page - 1}`;
    }
    if (isnotLastPage) {
        pagination.forward = `/catalog?page=${page + 1}`;
    }

    res.locals.pageTitle = 'All Ads Page';
    res.render('catalog', { ads: pageAds, page: { catalog: true }, pagination, filterOptions });
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
