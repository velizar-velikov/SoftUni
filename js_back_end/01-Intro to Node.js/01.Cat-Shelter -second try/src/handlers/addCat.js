const { getBreeds } = require('../model.js');
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

module.exports = { addCatHandler };
