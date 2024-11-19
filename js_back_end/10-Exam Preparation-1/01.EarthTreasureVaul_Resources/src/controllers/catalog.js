const { Router } = require('express');
const { getRecent, getAll, getById, getBySearch } = require('../services/stone.js');
const { preload } = require('../middlewares/preload.js');

const catalogRouter = Router();

const homeController = async (req, res) => {
    const stones = await getRecent();
    res.render('home', { stones });
};

const dashboardController = async (req, res) => {
    const stones = await getAll();
    res.render('dashboard', { stones });
};

const detailsController = async (req, res) => {
    const userId = req.user?._id;
    const stone = req.data.stone;

    const hasLiked = Boolean(stone.likedList.find((like) => like.toString() == userId));

    stone.isOwner = req.user && userId == stone.owner.toString();
    stone.hasLiked = hasLiked;

    res.render('details');
};

const searchController = async (req, res) => {
    const query = req.query;
    console.log(query);

    const foundStones = await getBySearch(query);
    console.log(foundStones);

    let data = {};
    if (foundStones.length == 0 && query.name) {
        data.search = query.name;
    }

    res.render('search', { stones: foundStones, data });
};

catalogRouter.get('/', homeController);
catalogRouter.get('/dashboard', dashboardController);
catalogRouter.get('/details/:id', preload(), detailsController);
catalogRouter.get('/search', searchController);

module.exports = { catalogRouter };
