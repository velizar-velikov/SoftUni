const { readFile } = require('../util.js');
const cats = require('../../data/cats.json');

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

function homeHandler(req, res) {
    const template = readFile('./views/home/index.html');
    res.writeHead(200, ['Content-Type', 'text/html']);

    const html = template.replace('%%catContent%%', cats.map(catFragment).join('\n'));

    res.write(html);
    res.end();
}

module.exports = {
    homeHandler,
};
