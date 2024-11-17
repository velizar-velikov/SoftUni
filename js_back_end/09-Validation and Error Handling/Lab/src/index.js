const express = require('express');
const handlebars = require('express-handlebars');

const { router } = require('./controllers/home.js');

const PORT = 3000;

const app = express();

const hbs = handlebars.create({ extname: '.hbs' });
app.use(express.urlencoded({ extended: true }));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(router);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
