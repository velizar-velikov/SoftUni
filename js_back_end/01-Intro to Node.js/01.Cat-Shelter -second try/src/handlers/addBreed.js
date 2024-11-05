const { addBreed } = require('../model.js');
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
    req.on('end', async () => {
        const formData = new URLSearchParams(data);
        const breed = formData.get('breed');

        if (breed) {
            await addBreed(breed);
            res.writeHead(301, ['Location', '/']);
            res.end();
        } else {
            res.writeHead(301, ['Location', '/cats/add-breed']);
            res.end();
        }
    });
}

module.exports = { addBreedHandler, postBreedHandler };
