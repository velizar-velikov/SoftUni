const jwt = require('jsonwebtoken');

const secret = 'this is a secret for jwt';

function createToken(userData) {
    // put in the payload either username or email, whichever is used for login too
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
