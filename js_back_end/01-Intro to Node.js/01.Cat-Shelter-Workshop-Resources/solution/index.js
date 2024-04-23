const http = require('http');
const fs = require('fs');

const { homeTemplate } = require('./views/home.html');
const { addCatTemplate } = require('./views/addCat.html');
const { addBreedTemplate } = require('./views/addBreed.html');
const { editCatTemplate } = require('./views/editCat.html');
const { catShelterTemplate } = require('./views/catShelter.html');

const { siteCss } = require('./styles/site.css');
const { queryParser } = require('./utils/queryParser');

let cats, breeds;
// Reading cats and breeds from files
try {
    const catData = fs.readFileSync('./solution/data/cats.json', 'utf8');
    const breedsData = fs.readFileSync('./solution/data/breeds.json', 'utf8');
    cats = JSON.parse(catData);
    breeds = JSON.parse(breedsData);
} catch (err) {
    console.log(err);
}

const server = http.createServer((req, res) => {
    // Routing
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homeTemplate(cats));
        res.end();
    } else if (req.url === '/styles/site.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(siteCss);
        res.end();
    } else if (req.url === '/cats/add-cat') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(addCatTemplate(breeds));
        res.end();
    } else if (req.url === '/cats/add-breed') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(addBreedTemplate());
        res.end();
    } else if (req.url.includes('/cats/add-cat?')) {
        const catFormData = queryParser(req.url);
        const cat = {
            id: cats.length + 1,
            name: catFormData.name,
            imageUrl: catFormData.imageUrl,
            breed: catFormData.breed,
            description: catFormData.description,
        };
        cats.push(cat);
        fs.writeFileSync('./solution/data/cats.json', JSON.stringify(cats));
        res.writeHead(301, { Location: 'http://localhost:3000/' });
        res.end();
    } else if (req.url.includes('/cats/add-breed?')) {
        const breedFormData = queryParser(req.url);
        breeds.push(breedFormData.breed);
        fs.writeFileSync('./solution/data/breeds.json', JSON.stringify(breeds));
        res.writeHead(301, { Location: 'http://localhost:3000/' });
        res.end();
    } else if (req.url.includes('/edit')) {
        const index = req.url.indexOf('/edit') - 1;
        const id = Number(req.url[index]);
        const cat = cats.find((cat) => cat.id === id);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(editCatTemplate(cat, breeds));
        res.end();
    } else if (req.url.includes('/shelter')) {
        const index = req.url.indexOf('/shelter') - 1;
        const id = Number(req.url[index]);
        const cat = cats.find((cat) => cat.id === id);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(catShelterTemplate(cat, breeds));
        res.end();
    }
});

const port = 3000;
server.listen(port, () => console.log(`Server is listening on port ${port}...`));
