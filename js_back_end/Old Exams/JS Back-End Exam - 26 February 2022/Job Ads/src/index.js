require('dotenv').config({ path: 'development.env' });
const express = require('express');

const { port, base_url } = require('./config/config.js');
const { databaseConfig } = require('./config/databaseConfig.js');
const { hbsConfig } = require('./config/hbsConfig.js');
const { expressConfig } = require('./config/expressConfig.js');
const { routesConfig } = require('./config/routes.js');

start();

async function start() {
    const app = express();

    await databaseConfig();
    hbsConfig(app);
    expressConfig(app);
    routesConfig(app);

    app.listen(port, () => console.log(`Server started at ${base_url}`));
}
