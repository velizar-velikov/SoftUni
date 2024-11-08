const express = require('express');

const { hbsConfig } = require('./config/hbsConfig.js');
const { expressConfig } = require('./config/expressConfig.js');
const { router } = require('./config/router.js');

const PORT = 3000;

const app = express();

hbsConfig(app);
expressConfig(app);
app.use(router);

app.listen(PORT, () => console.log('Server is listening on port', PORT));
