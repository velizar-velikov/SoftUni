const { getBreeds, addCat } = require('../model.js');
const { readTemplate, layout } = require('../util.js');

const breedTemplate = (breed) => `
 <option value="${breed}">${breed}</option>
`;
async function addCatHandler(req, res) {
    const addCatTemplate = await readTemplate('addCat');
    const template = await layout(addCatTemplate);

    const breeds = await getBreeds();
    const html = template.replace('%%breeds', breeds.map(breedTemplate).join('\n'));
    res.writeHead(200, ['Content-Type', 'text/html']);
    res.write(html);
    res.end();
}

async function postCatHandler(req, res) {
    let data = '';
    req.on('data', (chunk) => (data += chunk.toString()));
    req.on('end', async () => {
        const formData = new URLSearchParams(data);
        const cat = Object.fromEntries(formData.entries());
        console.log(cat);
        //TODO: transform the cat object into the type that is expected from cats.json

        if (cat) {
            await addCat(cat);
            res.writeHead(301, ['Location', '/']);
            res.end();
        } else {
            res.writeHead(301, ['Location', '/cats/add-cat']);
            res.end();
        }
    });
}

module.exports = { addCatHandler, postCatHandler };
