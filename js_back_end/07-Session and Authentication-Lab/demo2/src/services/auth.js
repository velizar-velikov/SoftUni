const bcrypt = require('bcrypt');
const { User } = require('../models/User.js');
const saltRounds = 9;

seed();

async function seed() {
    try {
        await register('peter', '123');
    } catch (error) {
        console.log('Database already seeded');
    }
}

async function login(username, password) {
    const user = await User.findOne({ username }).lean();
    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!user || !match) {
        console.log('Inncorect password for user', username);

        throw new Error('Incorrect username or password!');
    }

    console.log('Logged in as', username);

    return user;
}

async function register(username, password) {
    const exstingUser = await User.findOne({ username });

    if (exstingUser) {
        throw new Error('Username already exists!');
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
        username,
        hashedPassword,
    });

    await user.save();

    console.log('Created new user', username);

    return user;
}

async function getUserData() {
    const users = await User.find({});
    return users;
}

module.exports = { login, register, getUserData };
