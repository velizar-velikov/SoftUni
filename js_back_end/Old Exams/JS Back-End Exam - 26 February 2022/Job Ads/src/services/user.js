const bcrypt = require('bcrypt');
const { saltRounds } = require('../config/config.js');
const { User } = require('../models/User.js');

async function register(email, password, description) {
    const existing = await User.findOne({ email });

    if (existing) {
        throw new Error('User with the same email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, Number(saltRounds));

    const user = new User({
        email,
        password: hashedPassword,
        description,
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

async function getUser(userId) {
    return User.findById(userId).lean();
}

async function updateUser(userId, data) {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error(`User with id ${userId} doesn't exist`);
    }

    user.email = data.email;
    user.password = data.password;
    user.description = data.description;

    await user.save();

    return user;
}

module.exports = { register, login, getUser, updateUser };
