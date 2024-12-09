const { Router } = require('express');
const { validationResult } = require('express-validator');
const { isUser } = require('../middlewares/guards.js');
const { validateInputs } = require('../utils/validator.js');
const { parseError } = require('../utils/errorParser.js');
const { deleteItem, updateItem, getById, createItem } = require('../services//electronicsService.js');

const dataRouter = Router();

const createController = {
    get: (req, res) => {
        res.render('create');
    },
    post: async (req, res) => {
        const data = req.body;

        try {
            const result = validationResult(req);
            if (result.errors.length > 0) {
                throw result.errors;
            }
            await createItem(req.body, req.user._id);
            res.redirect('/catalog');
        } catch (err) {
            res.render('create', { data, errors: parseError(err).errors });
        }
    },
};
const editController = {
    get: async (req, res) => {
        const itemId = req.params.id;

        let item;
        try {
            item = await getById(itemId);
        } catch (error) {
            res.status(404).render('404', { errors: parseError(error).errors });
            return;
        }

        if (!item) {
            res.status(404).render('404', { errors: ['Item not found'] });
            return;
        }

        const userId = req.user._id;
        if (item.owner.toString() !== userId) {
            res.redirect('/login');
        }

        res.render('edit', { data: item });
    },
    post: async (req, res) => {
        const itemId = req.params.id;
        const data = req.body;

        try {
            const result = validationResult(req);
            if (result.errors.length > 0) {
                throw result.errors;
            }
            await updateItem(itemId, req.body, req.user._id);
            res.redirect(`/details/${itemId}`);
        } catch (err) {
            res.render('edit', { data, errors: parseError(err).errors });
        }
    },
};

const deleteController = async (req, res) => {
    const itemId = req.params.id;
    try {
        await deleteItem(itemId, req.user._id);
        res.redirect('/catalog');
    } catch (error) {
        res.redirect('/login');
    }
};

dataRouter.get('/create', isUser(), createController.get);
dataRouter.post('/create', isUser(), validateInputs('item'), createController.post);
dataRouter.get('/edit/:id', isUser(), editController.get);
dataRouter.post('/edit/:id', isUser(), validateInputs('item'), editController.post);
dataRouter.get('/delete/:id', isUser(), deleteController);

module.exports = { dataRouter };
