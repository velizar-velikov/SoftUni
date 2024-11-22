const jwt = require('jsonwebtoken');
const { secret, tokenExpTime } = require('../config/config.js');

function createToken(userData) {
    const payload = {
        _id: userData._id,
        email: userData.email,
    };

    const token = jwt.sign(payload, secret, { expiresIn: tokenExpTime });

    return token;
}

function verifyToken(token) {
    const payload = jwt.verify(token, secret);
    return payload;
}

module.exports = { createToken, verifyToken };
