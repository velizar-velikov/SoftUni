const bcrypt = require('bcrypt');
const saltRounds = 9;

const plainPass = '123';

async function hashPass(password) {
    const hashedPass = await bcrypt.hash(password, saltRounds);
    console.log(hashedPass);

    const match = await bcrypt.compare(plainPass, hashedPass);

    console.log(match);

    return hashedPass;
}

hashPass(plainPass);
