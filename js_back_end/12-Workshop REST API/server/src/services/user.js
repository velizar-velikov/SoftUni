const bcrypt = require('bcrypt');
const { User } = require('../models/User.js');

async function register(email, password) {
    const existing = await User.findOne({ email });

    if (existing) {
        throw new Error('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        email,
        password: hashedPassword,
    });

    await user.save();

    return user;
}

async function login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Incorrect username or password');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Incorrect username or password');
    }

    return user;
}

module.exports = { register, login };
