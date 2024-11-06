const express = require('express');
const handlebars = require('express-handlebars');

const { homeController } = require('./controllers/home.js');
const { catalogController, detailsController } = require('./controllers/catalog.js');
const { editController, createController } = require('./controllers/partsController.js');

const app = express();
const hbs = handlebars.create({
    extname: '.hbs',
    defaultLayout: 'default',
});

app.set('view engine', '.hbs');
app.engine('.hbs', hbs.engine);

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.get('/', homeController);
app.get('/catalog', catalogController);
app.get('/catalog/:id', detailsController);

app.get('/create', createController.get);
app.post('/create', createController.post);

app.get('/edit/:id', editController.get);
app.post('/edit/:id', editController.post);

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(3000);
