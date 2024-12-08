const { Router } = require('express');
const { getAll, getById, likeItem, searchData } = require('../services/dataService.js');
const { isUser } = require('../middlewares/guards.js');
const { parseError } = require('../utils/errorParser.js');

const catalogRouter = Router();

const homeController = (req, res) => {
    res.render('home');
};

const catalogController = async (req, res) => {
    const items = await getAll();
    res.render('catalog', { items });
};

const detailsController = async (req, res) => {
    const itemId = req.params.id;
    const userId = req.user?._id;
    let item;
    try {
        item = await getById(itemId);
    } catch (error) {
        res.status(404).render('404');
        return;
    }

    if (!item) {
        res.status(404).render('404');
        return;
    }

    const isOwner = item.owner.toString() == userId;
    const hasLiked = item.likedList.some((id) => id.toString() == userId);

    const canLike = !isOwner && !hasLiked;
    res.render('details', { item, isOwner, canLike });
};

const searchController = async (req, res) => {
    const search = req.query;
    const items = await searchData(search);

    res.render('search', { items });
};

const likeController = async (req, res) => {
    const itemId = req.params.id;
    try {
        await likeItem(itemId, req.user._id);
        res.redirect(`/details/${itemId}`);
    } catch (error) {
        res.render('404', { errors: parseError(error).errors });
    }
};

catalogRouter.get('/', homeController);
catalogRouter.get('/catalog', catalogController);
catalogRouter.get('/details/:id', detailsController);
catalogRouter.get('/search', searchController);
catalogRouter.get('/like/:id', isUser(), likeController);

module.exports = { catalogRouter };
