const fs = require('fs');

fs.readFile('./demo.html', (err, data) => {
    if (err != null) {
        console.log('Error encountered:', err.message);
        return;
    }
    console.log(data.toString());
});
// console.log(data.toString());
