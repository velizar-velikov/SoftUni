const { start: startSubscriber } = require('./subscriber');
const { start: startPublisher } = require('./publisher');

function start() {
    startSubscriber();
    startPublisher();
}

start();
