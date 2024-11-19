const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { isUser, isOwner } = require('../middlewares/guards.js');
const { createStone, deleteById, editStone, likeStone } = require('../services/stone.js');
const { parseError } = require('../util.js');
const { preload } = require('../middlewares/preload.js');

const stoneRouter = Router();

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
            await createStone(req.body, req.user._id);
            res.redirect('/dashboard');
        } catch (err) {
            res.render('create', { errors: parseError(err).errors, data: req.body });
        }
    },
};

const editController = {
    get: (req, res) => {
        const stone = req.data.stone;
        res.render('edit', { data: stone });
    },
    post: async (req, res) => {
        const stoneId = req.params.id;
        try {
            const result = validationResult(req);
            if (result.errors.length > 0) {
                throw result.errors;
            }
            await editStone(stoneId, req.body);
            res.redirect(`/details/${stoneId}`);
        } catch (err) {
            res.render('edit', { errors: parseError(err).errors, data: req.body });
        }
    },
};

const deleteController = async (req, res) => {
    const stoneId = req.params.id;
    await deleteById(stoneId);
    res.redirect('/dashboard');
};

const likeController = async (req, res) => {
    const stoneId = req.params.id;
    const userId = req.user._id;
    const stone = req.data.stone;

    // I can create a route guard for isNotOwner
    const isOwner = userId == stone.owner.toString();
    try {
        if (isOwner) {
            throw new Error('Access denied');
        }
        await likeStone(stoneId, userId);
        res.redirect(`/details/${stoneId}`);
    } catch (error) {
        res.render('404');
        return;
    }
};

stoneRouter.get('/create', isUser(), createController.get);
stoneRouter.post(
    '/create',
    isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('name must be at least 2 characters long'),
    body('category').trim().isLength({ min: 3 }).withMessage('category must be at least 3 characters long'),
    body('color').trim().isLength({ min: 2 }).withMessage('color must be at least 2 characters long'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('image must be a valid URL'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('location must be between 5 and 15 characters long'),
    body('formula').trim().isLength({ min: 3, max: 30 }).withMessage('formula must be between 3 and 30 characters long'),
    body('description').trim().isLength({ min: 10 }).withMessage('description must be at least 10 characters long'),
    createController.post
);
stoneRouter.get('/edit/:id', isUser(), preload(), isOwner(), editController.get);
stoneRouter.post(
    '/edit/:id',
    isUser(),
    preload(),
    isOwner(),
    body('name').trim().isLength({ min: 2 }).withMessage('name must be at least 2 characters long'),
    body('category').trim().isLength({ min: 3 }).withMessage('category must be at least 3 characters long'),
    body('color').trim().isLength({ min: 2 }).withMessage('color must be at least 2 characters long'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('image must be a valid URL'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('location must be between 5 and 15 characters long'),
    body('formula').trim().isLength({ min: 3, max: 30 }).withMessage('formula must be between 3 and 30 characters long'),
    body('description').trim().isLength({ min: 10 }).withMessage('description must be at least 10 characters long'),
    editController.post
);
stoneRouter.get('/delete/:id', isUser(), preload(), isOwner(), deleteController);
stoneRouter.get('/like/:id', isUser(), preload(), likeController);

module.exports = { stoneRouter };
