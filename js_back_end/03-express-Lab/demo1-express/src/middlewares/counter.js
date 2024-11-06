let count = 0;

function countMiddleware(req, res, next) {
    count++;
    req.count = count;
    console.log('Executing counter middleware', count);

    next();
}

module.exports = { countMiddleware };
