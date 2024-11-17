const express = require('express');

const { hbsConfig } = require('./config/hbsConfig.js');
const { expressConfig } = require('./config/expressConfig.js');
const { configRoutes } = require('./config/router.js');
const { databaseConfig } = require('./config/databaseConfig.js');

const PORT = 3001;

async function start() {
    const app = express();

    await databaseConfig();
    hbsConfig(app);
    expressConfig(app);
    configRoutes(app);

    app.listen(PORT, () => console.log('Server is listening on port', PORT));
}

start();
