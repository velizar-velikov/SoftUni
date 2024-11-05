const { readTemplate, layout } = require('../util.js');

async function addBreedHandler(req, res) {
    const addBreedTemplate = await readTemplate('addBreed');
    const template = await layout(addBreedTemplate);

    res.writeHead(200, ['Content-Type', 'text/html']);
    res.write(template);
    res.end();
}

async function postBreedHandler(req, res) {
    let data = '';
    req.on('data', (chunk) => (data += chunk.toString()));
    req.on('end', () => {
        // Do something with data
        console.log(new URLSearchParams(data));
    });

    res.statusCode = 204;
    res.end();
}

module.exports = { addBreedHandler, postBreedHandler };
