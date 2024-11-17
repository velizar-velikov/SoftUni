const { Router } = require('express');
const { createCast } = require('../services/casts.js');
const { isUser } = require('../middlewares/guards.js');

const createCastRouter = Router();

const createCastController = {
    get: (req, res) => {
        res.render('create-cast');
    },
    post: async (req, res) => {
        const errors = {
            name: !req.body.name,
            age: !req.body.age,
            born: !req.body.born,
            nameInMovie: !req.body.nameInMovie,
            imageURL: !req.body.imageURL,
        };

        if (Object.values(errors).some((v) => v)) {
            res.render('create-cast', { cast: req.body, errors });
            return;
        }

        await createCast(req.body);
        res.redirect('/');
    },
};

createCastRouter.get('/create-cast', isUser(), createCastController.get);
createCastRouter.post('/create-cast', isUser(), createCastController.post);

module.exports = { createCastRouter };
