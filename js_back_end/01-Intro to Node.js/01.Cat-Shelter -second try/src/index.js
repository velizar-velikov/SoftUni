const http = require('http');
const { homeHandler } = require('./handlers/home.js');
const { staticFileHandler } = require('./handlers/static.js');
const { addBreedHandler, postBreedHandler } = require('./handlers/addBreed.js');
const { addCatHandler, postCatHandler } = require('./handlers/addCat.js');

const port = 3000;

const routes = {
    GET: {
        '/': homeHandler,
        '/index.html': homeHandler,
        '/cats/add-breed': addBreedHandler,
        '/cats/add-cat': addCatHandler,
    },
    POST: {
        '/cats/add-breed': postBreedHandler,
        '/cats/add-cat': postCatHandler,
    },
};

http.createServer((req, res) => {
    const methodRoutes = routes[req.method];

    if (methodRoutes) {
        const route = methodRoutes[req.url];

        if (typeof route == 'function') {
            route(req, res);
            return;
        }
    }
    if (staticFileHandler(req, res)) {
        return;
    }

    res.writeHead(404, ['Content-Type', 'text/plain']);
    res.write('404 Not Found');
    res.end();
}).listen(port, () => console.log('Server listening on port', port));
