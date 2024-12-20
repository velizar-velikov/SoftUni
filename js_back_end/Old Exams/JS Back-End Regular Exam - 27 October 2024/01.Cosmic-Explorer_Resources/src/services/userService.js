const bcrypt = require('bcrypt');

const { User } = require('../models/User.js');

const saltRounds = 10;

async function register(username, email, password) {
    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
        throw new Error('User with the same email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await user.save();
    } catch (error) {
        if (error.code === 11000) {
            throw new Error('This username is taken');
        }
    }

    return user;
}

async function login(username, password) {
    const user = await User.findOne({ username });

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
