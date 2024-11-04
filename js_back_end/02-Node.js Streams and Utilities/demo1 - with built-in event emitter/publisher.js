// const { publish } = require('./bus');

const { emitter } = require('./emitter.js');

function start() {
    const data = [1, 2, 3];
    console.log('Publishing data');

    emitter.emit('ping', data);
    emitter.emit('login', {
        user: 'Peter',
        password: '123456',
    });
}

module.exports = { start };
