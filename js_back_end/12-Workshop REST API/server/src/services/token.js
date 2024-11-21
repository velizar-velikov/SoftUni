const jwt = require('jsonwebtoken');

const secret = 'very cool secret';

function createToken(userData) {
    const payload = {
        _id: userData._id,
        email: userData.email,
    };

    const token = jwt.sign(payload, secret, { expiresIn: '1d' });

    return token;
}

function verifyToken(token) {
    const payload = jwt.verify(token, secret);
    return payload;
}

module.exports = { createToken, verifyToken };
