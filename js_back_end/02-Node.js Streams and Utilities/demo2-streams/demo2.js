const fs = require('fs');

const data = [1, 2, 3, 4];

// fs.writeFileSync('./data.json', JSON.stringify(data));

fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    console.log('Write completed');
});

const list = fs.readdirSync('./');
console.log(list);

console.log('Code completed');
