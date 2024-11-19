const bcrypt = require('bcrypt');
const { User } = require('../models/User.js');

const saltRounds = 10;

async function register(email, password) {
    const existing = await User.findOne({ email });

    if (existing) {
        const err = new Error('A user with the same email already exists');
        throw err;
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
        email,
        password: hashedPassword,
    });

    await user.save();

    console.log('Created new user', email);

    return user;
}

async function login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Incorrect username or password');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Inccorect username or password');
    }

    console.log('Logged in as', email);

    return user;
}

module.exports = { register, login };
