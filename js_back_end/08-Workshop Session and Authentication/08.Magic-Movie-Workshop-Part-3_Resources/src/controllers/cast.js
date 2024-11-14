const { createCast } = require('../services/casts.js');
const { ifNoUserRedirectToHome } = require('../util.js');

module.exports = {
    createCastController: {
        get: (req, res) => {
            const { user } = req.session;
            ifNoUserRedirectToHome(req, res);

            res.render('create-cast', { user });
        },
        post: async (req, res) => {
            const { user } = req.session;
            ifNoUserRedirectToHome(req, res);

            const errors = {
                name: !req.body.name,
                age: !req.body.age,
                born: !req.body.born,
                nameInMovie: !req.body.nameInMovie,
                imageURL: !req.body.imageURL,
            };

            if (Object.values(errors).some((v) => v)) {
                res.render('create-cast', { user, cast: req.body, errors });
                return;
            }

            await createCast(req.body);
            res.redirect('/');
        },
    },
};
