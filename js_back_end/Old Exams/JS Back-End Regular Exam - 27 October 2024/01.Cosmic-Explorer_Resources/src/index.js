const express = require('express');
const { connectDatabase } = require('./config/databaseConfig.js');
const { configExpress } = require('./config/expressConfig.js');
const { hbsConfig } = require('./config/hbsConfig.js');
const { routesConfig } = require('./config/routes.js');

start();

async function start() {
    const PORT = 3000;
    const app = express();

    await connectDatabase();
    hbsConfig(app);
    configExpress(app);
    routesConfig(app);

    app.listen(PORT, () => console.log(`App started at http://localhost:${PORT}`));
}
