const handlebars = require('express-handlebars');

function hbsConfig(app) {
    const hbs = handlebars.create({
        extname: '.hbs',
        defaultLayout: 'default',
    });
    app.set('view engine', '.hbs');
    app.engine('.hbs', hbs.engine);
}

module.exports = { hbsConfig };
