const { createPart, getPartById, editPart } = require('../services/parts.js');

module.exports = {
    createController: {
        get: (req, res) => {
            res.render('create');
        },
        post: (req, res) => {
            const { name, price, description } = req.body;

            if (!name || !price || !description) {
                // Missing fields

                res.render('create', {
                    name,
                    price,
                    description,
                    error: { name: !name, price: !price, description: !description },
                });
                return;
            }

            const { id } = createPart(req.body);

            res.redirect(`/catalog/${id}`);
        },
    },
    editController: {
        get: (req, res) => {
            const part = getPartById(req.params.id);

            if (!part) {
                res.redirect('/404');
            }

            res.render('edit', part);
        },
        post: (req, res) => {
            const { id } = req.params;
            const { name, price, description, stock } = req.body;

            if (!name || !price || !description || !stock) {
                // Missing fields

                res.render('edit', {
                    id,
                    name,
                    price,
                    description,
                    stock,
                    error: { name: !name, price: !price, description: !description, stock: !stock },
                });
                return;
            }

            editPart(id, req.body);

            res.redirect(`/catalog/${id}`);
        },
    },
};
