const fs = require('fs');
const { createServer } = require('http');

createServer((req, res) => {
    if (req.method == 'GET') {
        // const reader = fs.createReadStream('./index2.html');
        const index = fs.readFileSync('./index2.html');
        res.write(index.toString());
        process.stdin.pipe(res);
        setTimeout(() => res.end(), 10000);
        // reader.pipe(res);
    } else if (req.method == 'POST') {
        console.log('POST request');

        const writer = fs.createWriteStream('./client_log.txt');
        req.pipe(writer).on('close', () => {
            res.statusCode = 204;
            res.end();
        });
    }
}).listen(3000);
