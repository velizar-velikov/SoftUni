function friendList(input) {
    let friends = input.shift().split(', ');

    let blacklistedCount = 0;
    let lostNamesCount = 0;

    let command = input.shift();
    while (command != 'Report') {
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action == 'Blacklist') {
            let name = tokens[1];
            let newName = 'Blacklisted';
            if (friends.includes(name)) {
                blacklistedCount++;
                let index = friends.indexOf(name);
                friends.splice(index, 1, newName);
                console.log(`${name} was blacklisted.`);
            } else {
                console.log(`${name} was not found.`);
            }
        } else if (action == 'Error') {
            let index = tokens[1];
            let seachedName = friends[index];
            if (index >= 0 && index < friends.length &&
                friends[index] != 'Blacklisted' && friends[index] != 'Lost') {
                lostNamesCount++;
                let newName = 'Lost';
                friends.splice(index, 1, newName);
                console.log(`${seachedName} was lost due to an error.`);
            }
        } else if (action == 'Change') {
            let index = tokens[1];
            let newName = tokens[2];
            if (index >= 0 && index < friends.length) {
                let oldName = friends[index];
                friends.splice(index, 1, newName);
                console.log(`${oldName} changed his username to ${newName}.`);
            }
        }
        command = input.shift();
    }
    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${lostNamesCount}`);
    console.log(friends.join(' '));
}
friendList(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"])

// friendList(["Mike, John, Eddie, William",
// "Error 3",
// "Error 3",
// "Change 0 Mike123",
// "Report"])

// friendList(["Mike, John, Eddie, William",
// "Blacklist Maya",
// "Error 1",
// "Change 4 George",
// "Report"])