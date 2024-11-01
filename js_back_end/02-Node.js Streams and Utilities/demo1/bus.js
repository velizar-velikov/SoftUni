let subscriber = null;

function subscribe(callback) {
    subscriber = callback;
}

function publish(message) {
    if (typeof subscriber == 'function') {
        console.log('Dispatching message');

        subscriber(message);
    }
}

module.exports = { subscribe, publish };
