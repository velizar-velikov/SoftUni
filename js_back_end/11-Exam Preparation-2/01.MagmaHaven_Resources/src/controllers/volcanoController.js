const { Router } = require('express');
const { validateInputs } = require('../util/validator.js');
const { validationResult } = require('express-validator');
const { createVolcano, getVolcanoById, updateVolcano, deleteVolcano } = require('../services/volcanoService.js');
const { parseError } = require('../util/errorParser.js');
const { isUser } = require('../middlewares/guards.js');

const volcanoRouter = Router();

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
            await createVolcano(req.body, req.user._id);
            res.redirect('/catalog');
        } catch (err) {
            res.render('create', { data: req.body, errors: parseError(err).errors });
        }
    },
};
const editController = {
    get: async (req, res) => {
        const volcanoId = req.params.id;
        const volcano = await getVolcanoById(volcanoId);
        console.log(volcano);

        res.render('edit', { data: volcano });
    },
    post: async (req, res) => {
        const volcanoId = req.params.id;
        try {
            const result = validationResult(req);
            if (result.errors.length > 0) {
                throw result.errors;
            }
            await updateVolcano(volcanoId, req.body, req.user._id);
            res.redirect(`/details/${volcanoId}`);
        } catch (err) {
            res.render('edit', { data: req.body, errors: parseError(err).errors });
        }
    },
};

const deleteController = async (req, res) => {
    const volcanoId = req.params.id;
    await deleteVolcano(volcanoId, req.user._id);
    res.redirect('/catalog');
};

volcanoRouter.get('/create', isUser(), createController.get);
volcanoRouter.post('/create', isUser(), validateInputs('volcano'), createController.post);
volcanoRouter.get('/edit/:id', isUser(), editController.get);
volcanoRouter.post('/edit/:id', isUser(), validateInputs('volcano'), editController.post);
volcanoRouter.get('/delete/:id', isUser(), deleteController);

module.exports = { volcanoRouter };
