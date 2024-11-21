const { Router } = require('express');
const { validationResult } = require('express-validator');
const { isUser } = require('../middlewares/guards.js');
const { parseError, validateFurnitureInput } = require('../util.js');
const { getAllFurniture, getFurnitureById, getFurnitureForUser } = require('../services/furniture.js');
const { createFurniture, updateFurniture, deleteFurniture } = require('../services/furniture.js');

const catalogRouter = Router();

const dashboardController = async (req, res) => {
    const query = req.query.where;

    let furniture;

    if (query) {
        const userId = [...query.matchAll(/_ownerId="(.+?)"/gi)][0][1];
        furniture = await getFurnitureForUser(userId);
    }

    if (!furniture) {
        furniture = await getAllFurniture();
    }

    res.json(furniture);
};

const detailsController = async (req, res) => {
    try {
        const furniture = await getFurnitureById(req.params.id);
        res.json(furniture);
    } catch (err) {
        res.status(400).json({ code: 400, message: parseError(err).message });
    }
};

const createController = async (req, res) => {
    try {
        const result = validationResult(req);
        if (result.errors.length > 0) {
            throw result.errors;
        }

        const furniture = await createFurniture(req.body, req.user._id);
        res.json(furniture);
    } catch (err) {
        res.status(400).json({ code: 400, message: parseError(err).message });
    }
};

const editController = async (req, res) => {
    try {
        const result = validationResult(req);
        if (result.errors.length > 0) {
            throw result.errors;
        }

        const furniture = await updateFurniture(req.params.id, req.body, req.user._id);
        res.json(furniture);
    } catch (err) {
        res.status(400).json({ code: 400, message: parseError(err).message });
    }
};

const deleteController = async (req, res) => {
    try {
        const furniture = await deleteFurniture(req.params.id, req.user._id);
        res.json(furniture);
    } catch (err) {
        res.status(400).json({ code: 400, message: parseError(err).message });
    }
};

catalogRouter.get('/', dashboardController);
catalogRouter.get('/:id', detailsController);
catalogRouter.post('/', isUser(), validateFurnitureInput(), createController);
catalogRouter.put('/:id', isUser(), validateFurnitureInput(), editController);

catalogRouter.delete('/:id', isUser(), deleteController);

module.exports = { catalogRouter };
