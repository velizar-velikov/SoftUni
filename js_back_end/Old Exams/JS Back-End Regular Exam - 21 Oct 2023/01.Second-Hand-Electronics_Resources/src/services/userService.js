const bcrypt = require('bcrypt');

const { User } = require('../models/User.js');

const saltRounds = 10;

// TODO: implement specific user identity
async function register(username, email, password) {
    const existing = await User.findOne({ email });

    if (existing) {
        throw new Error('User with the same email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
        username,
        email,
        password: hashedPassword,
    });

    await user.save();

    return user;
}

async function login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Incorrect email or password');
    }

    return user;
}

module.exports = { register, login };
