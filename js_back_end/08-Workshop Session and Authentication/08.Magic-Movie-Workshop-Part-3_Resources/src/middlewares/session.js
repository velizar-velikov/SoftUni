const session = require('express-session');

const secret = 'top secret';

function sessionConfig(app) {
    const _session = session({
        secret,
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false },
    });

    app.use(_session);
}

module.exports = { sessionConfig };
