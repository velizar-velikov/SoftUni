const handlebars = require('express-handlebars');

const hbs = handlebars.create({
    extname: '.hbs',
});

function hbsConfig(app) {
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
}

module.exports = { hbsConfig };
