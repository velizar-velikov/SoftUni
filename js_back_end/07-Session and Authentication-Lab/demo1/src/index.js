const express = require('express');
const { configHandlebars } = require('./config/hbsConfig.js');
const { configExpress } = require('./config/expressConfig.js');
const { router } = require('./config/routes.js');

const PORT = process.env.PORT | 3000;

function start() {
    const app = express();
    configHandlebars(app);
    configExpress(app);
    app.use(router);

    app.listen(PORT, () => `Server is running on port: ${PORT}`);
}

start();
