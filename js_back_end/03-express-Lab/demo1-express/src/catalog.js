const { Router } = require('express');
const { countMiddleware } = require('./middlewares/counter.js');

const catalogRouter = Router();

const catalogHtml = `
<h1>Catalog Page</h1>
<a href="/">Home</a>
<a href="/catalog">Catalog</a>
`;

catalogRouter.get('/', (req, res) => {
    res.send(catalogHtml);
});

catalogRouter.get('/:category/:itemId', (req, res) => {
    res.send(catalogHtml + `<h2>Category: ${req.params.category}</h2>` + `<p>Item ID: ${req.params.itemId}</p>`);
});

module.exports = { catalogRouter };
