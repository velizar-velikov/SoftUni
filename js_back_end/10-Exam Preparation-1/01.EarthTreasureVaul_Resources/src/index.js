const express = require('express');
const { databaseConfig } = require('./config/databaseConfig.js');
const { hbsConfig } = require('./config/hbsConfig.js');
const { expressConfig } = require('./config/expressCOnfig.js');
const { routesConfig } = require('./config/routes.js');

const PORT = 3000;

start();

async function start() {
    const app = express();

    await databaseConfig();
    expressConfig(app);
    hbsConfig(app);
    routesConfig(app);
    app.listen(PORT, () => console.log(`Server started at: http://localhost:${PORT}`));
}
