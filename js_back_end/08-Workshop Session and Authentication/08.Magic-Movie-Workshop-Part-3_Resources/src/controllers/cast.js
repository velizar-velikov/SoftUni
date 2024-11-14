const { createCast } = require('../services/casts.js');

module.exports = {
    createCastController: {
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
    },
};
