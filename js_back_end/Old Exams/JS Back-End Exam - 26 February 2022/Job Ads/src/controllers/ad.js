const { Router } = require('express');
const { validationResult } = require('express-validator');
const { createAd, updateAd, deleteAd, getAdById, applyForAd } = require('../services/ad.js');
const { isUser } = require('../middlewares/guards.js');
const { parseError, validateAdInput } = require('../util.js');

const adRouter = Router();

const createController = {
    get: (req, res) => {
        res.render('create');
    },
    post: async (req, res) => {
        try {
            const result = validationResult(req);
            if (result.errors.length > 0) {
                throw result.errors;
            }
            await createAd(req.body, req.user._id);
            res.redirect('/catalog');
        } catch (err) {
            res.render('create', { data: req.body, errors: parseError(err).errors });
        }
    },
};

const editController = {
    get: async (req, res) => {
        const ad = await getAdById(req.params.id);
        res.render('edit', { data: ad });
    },
    post: async (req, res) => {
        try {
            const result = validationResult(req);
            if (result.errors.length > 0) {
                throw result.errors;
            }
            const adId = req.params.id;
            const userId = req.user._id;

            await updateAd(adId, req.body, userId);
            res.redirect(`/details/${req.params.id}`);
        } catch (err) {
            res.render('edit', { data: req.body, errors: parseError(err).errors });
        }
    },
};

const deleteController = async (req, res) => {
    const adId = req.params.id;
    const userId = req.user._id;
    await deleteAd(adId, userId);
    res.redirect('/catalog');
};

const applyController = async (req, res) => {
    const adId = req.params.id;
    const userId = req.user._id;
    try {
        await applyForAd(adId, userId);
        res.redirect(`/details/${adId}`);
    } catch (err) {
        res.render('404');
    }
};

adRouter.get('/create', isUser(), createController.get);
adRouter.post('/create', isUser(), validateAdInput(), createController.post);
adRouter.get('/edit/:id', isUser(), editController.get);
adRouter.post('/edit/:id', isUser(), validateAdInput(), editController.post);
adRouter.get('/delete/:id', isUser(), deleteController);
adRouter.get('/apply/:id', isUser(), applyController);

module.exports = { adRouter };
