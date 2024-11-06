const path = require('path');

const express = require('express');
const { catalogRouter } = require('./catalog.js');
const fs = require('fs/promises');

const { countMiddleware } = require('./middlewares/counter.js');
const { dataController } = require('./data.js');

const app = express();
const port = 3000;

const homeHtml = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/static/style.css">
    <title>Document</title>
</head>

<body>

<h1>Home Page</h1>
<a href="/">Home</a>
<a href="/catalog">Catalog</a>
<img src="/static/cat.jpg">

</body>

</html>
`;

// loading static files with express static, looking for the files in folder "static"
app.use('/static', express.static('static'));

// middleware for the whole application;
// runs on every request to the server
app.use(countMiddleware);

app.get('/', (req, res) => {
    res.send(homeHtml);
});

app.use('/catalog', catalogRouter);

app.get('/data', dataController);

app.get('*', (req, res) => {
    res.status(404);
    res.send('404 Not Found');
});

app.listen(port, () => console.log('Server listening on port', port));
