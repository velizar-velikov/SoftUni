const { getById } = require('../services/stone.js');

function preload() {
    return async function (req, res, next) {
        const stoneId = req.params?.id;

        try {
            const stone = await getById(stoneId);
            if (!stone) {
                throw new Error('Movie not found');
            }
            req.data = { stone };
            res.locals.stone = stone;
        } catch (error) {
            res.render('404');
            return;
        }

        next();
    };
}

module.exports = { preload };
