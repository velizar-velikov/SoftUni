const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

require('./models/User.js');

const session = require('express-session');
const { homeController } = require('./controllers/home.js');
const { login, logout, register, details } = require('./controllers/auth.js');

const PORT = 3000;

const hbs = handlebars.create({
    extname: '.hbs',
});

async function configDatabase() {
    const connectionString = 'mongodb://localhost:27017/testdb';
    await mongoose.connect(connectionString);
    mongoose.connection.on('connected', () => console.log('Database connected'));
    mongoose.connection.on('error', () => console.log('Error occured connecting to database'));
}

async function start() {
    await configDatabase();

    const app = express();

    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));

    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(
        session({
            secret: 'super secret',
            saveUninitialized: true,
            resave: true,
            cookie: { secure: false },
        })
    );

    app.get('/', homeController);

    app.get('/details', details);

    app.get('/login', login.get);
    app.post('/login', login.post);

    app.get('/register', register.get);
    app.post('/register', register.post);

    app.get('/logout', logout.get);

    app.listen(PORT, () => console.log('Server listening on port', PORT));
}

start();
