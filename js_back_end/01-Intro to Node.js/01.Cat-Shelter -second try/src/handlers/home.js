const { getCats } = require('../model.js');
const { readTemplate, layout } = require('../util.js');

function catFragment(cat) {
    return `
    <li>
    <img src="${cat.imageUrl}">
     <h3>${cat.name}</h3>
     <p><span>Breed: </span>${cat.breed}</p>
     <p><span>Description: </span>${cat.breed}</p>
     <ul class="buttons">
         <li class="btn edit"><a href="">Change Info</a></li>
        <li class="btn delete"><a href="">New Home</a></li>
     </ul>
 </li>
    `;
}

async function homeHandler(req, res) {
    const homeTemplate = await readTemplate('home/index');
    const template = await layout(homeTemplate, true);
    res.writeHead(200, ['Content-Type', 'text/html']);

    const cats = await getCats();

    const html = template.replace('%%catContent%%', cats.map(catFragment).join('\n'));

    res.write(html);
    res.end();
}

module.exports = {
    homeHandler,
};
