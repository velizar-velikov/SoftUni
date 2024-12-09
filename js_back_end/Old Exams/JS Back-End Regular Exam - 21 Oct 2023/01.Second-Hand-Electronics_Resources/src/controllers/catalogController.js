const { Router } = require('express');
const { getAll, getById, buyElectronic, searchData } = require('../services/electronicsService.js');
const { isUser } = require('../middlewares/guards.js');
const { parseError } = require('../utils/errorParser.js');

const catalogRouter = Router();

const homeController = (req, res) => {
    res.render('home');
};

const catalogController = async (req, res) => {
    const electronics = await getAll();
    res.render('catalog', { electronics });
};

const detailsController = async (req, res) => {
    const itemId = req.params.id;
    const userId = req.user?._id;

    let electronic;
    try {
        electronic = await getById(itemId);
    } catch (error) {
        res.status(404).render('404', { errors: parseError(error).errors });
        return;
    }

    if (!electronic) {
        res.status(404).render('404', { errors: ['Item not found'] });
        return;
    }

    const isOwner = electronic.owner.toString() == userId;
    const hasBought = electronic.buyingList.some((id) => id.toString() == userId);

    const canBuy = !isOwner && !hasBought;
    res.render('details', { electronic, isOwner, canBuy });
};

const searchController = async (req, res) => {
    const search = req.query;
    const electronics = await searchData(search);

    res.render('search', { data: search, electronics });
};

const buyController = async (req, res) => {
    const itemId = req.params.id;
    try {
        await buyElectronic(itemId, req.user._id);
        res.redirect(`/details/${itemId}`);
    } catch (error) {
        res.render('404', { errors: parseError(error).errors });
    }
};

catalogRouter.get('/', homeController);
catalogRouter.get('/catalog', catalogController);
catalogRouter.get('/details/:id', detailsController);
catalogRouter.get('/search', searchController);
catalogRouter.get('/buy/:id', isUser(), buyController);

module.exports = { catalogRouter };
