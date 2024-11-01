const { publish } = require('./bus');

function start() {
    const data = [1, 2, 3];
    console.log('Publishing data');
    
    publish(data);
}

module.exports = { start };
