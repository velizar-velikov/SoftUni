const express = require('express');
const { expressConfig } = require('./config/expressConfig.js');
const { routesConfig } = require('./config/routes.js');
const { databaseConfig } = require('./config/databaseConfig.js');

start();

async function start() {
    const PORT = 3030;
    const app = express();

    await databaseConfig();
    expressConfig(app);
    routesConfig(app);

    app.listen(PORT, () => console.log('Server started at http://localhost:' + PORT));
}
