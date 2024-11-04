// const { subscribe } = require('./bus');
const { emitter } = require('./emitter.js');

function start() {
    emitter.on('ping', onMessage);
}

function onMessage(data) {
    console.log('Received message from bus:', data);
}

module.exports = { start };
