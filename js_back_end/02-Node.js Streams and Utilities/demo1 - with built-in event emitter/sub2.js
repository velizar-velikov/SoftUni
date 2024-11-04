// const { subscribe, unsubscribe } = require('./bus');

const { emitter } = require('./emitter.js');

function start() {
    emitter.on('login', onMessage);
}

function unsub() {
    emitter.off('login', onMessage);
}

function onMessage(data) {
    console.log('Second subscriber receiving message:', data);
}

module.exports = { start, unsub };
