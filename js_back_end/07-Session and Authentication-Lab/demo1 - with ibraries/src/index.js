const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const { configHandlebars } = require('./config/hbsConfig.js');
const { configExpress } = require('./config/expressConfig.js');
const { router } = require('./config/routes.js');

const PORT = process.env.PORT | 3000;
const secret = 'super secret';

function start() {
    const app = express();
    configHandlebars(app);
    configExpress(app);

    app.use(cookieParser(secret));
    app.use(
        session({
            secret,
            resave: true,
            saveUninitialized: true,
            cookie: { secure: false },
        })
    );

    app.use(router);

    app.listen(PORT, () => `Server is running on port: ${PORT}`);
}

start();
