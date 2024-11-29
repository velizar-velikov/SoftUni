const { Router } = require('express');
const { getAllVolcanoes, getVolcanoById, voteForVolcano, searchVolcanoes } = require('../services/volcanoService.js');
const { isUser } = require('../middlewares/guards.js');

const catalogRouter = Router();

const homeController = (req, res) => {
    res.render('home');
};

const catalogController = async (req, res) => {
    const volcanoes = await getAllVolcanoes();
    res.render('catalog', { volcanoes });
};

const detailsController = async (req, res) => {
    const volcanoId = req.params.id;
    const userId = req.user?._id;
    const volcano = await getVolcanoById(volcanoId);

    volcano.voteCount = volcano.voteList.length;

    const isOwner = volcano.owner.toString() == userId;
    const hasVoted = volcano.voteList.some((id) => id.toString() == userId);

    const canVote = !isOwner && !hasVoted;
    res.render('details', { volcano, isOwner, canVote });
};

const searchController = async (req, res) => {
    const search = req.query;
    console.log(req.query);
    const volcanoes = await searchVolcanoes(search);

    res.render('search', { volcanoes });
};

const voteController = async (req, res) => {
    const volcanoId = req.params.id;
    await voteForVolcano(volcanoId, req.user._id);
    res.redirect(`/details/${volcanoId}`);
};

catalogRouter.get('/', homeController);
catalogRouter.get('/catalog', catalogController);
catalogRouter.get('/details/:id', detailsController);
catalogRouter.get('/search', searchController);
catalogRouter.get('/vote/:id', isUser(), voteController);

module.exports = { catalogRouter };
