function houseParty(input) {
    let guestList = [];
    while (input.length > 0) {
        let tokens = input.shift().split(' ');
        let name = tokens[0];
        let output = '';

        if (tokens[2] == 'not') {
            guestList.includes(name) ? guestList.splice(guestList.indexOf(name), 1) : console.log(`${name} is not in the list!`);
        } else {
            guestList.includes(name) ? console.log(`${name} is already in the list!`) : guestList.push(name);
        }
    }
    console.log(guestList.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])

// houseParty(['Tom is going!',
//     'Annie is going!',
//     'Tom is going!',
//     'Garry is going!',
//     'Jerry is going!'])