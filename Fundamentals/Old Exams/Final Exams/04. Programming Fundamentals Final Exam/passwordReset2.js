function passwordReset(input) {
    let password = input.shift();
    let command = input.shift();

    while (command !== 'Done') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action === 'TakeOdd') {
            password = password
                .split('')
                .filter((char, i) => i % 2 == 1)
                .join('');
            console.log(password);
        } else if (action === 'Cut') {
            let [index, length] = tokens;
            index = Number(index);
            length = Number(length);
            password = password.replace(password.slice(index, index + length), '');
            console.log(password);
        } else if (action === 'Substitute') {
            let [substr, substitude] = tokens;
            if (password.includes(substr)) {
                password = password.split(substr).join(substitude);
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }
        command = input.shift();
    }
    console.log(`Your password is: ${password}`);
}

// passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
// "TakeOdd",
// "Cut 15 3",
// "Substitute :: -",
// "Substitute | ^",
// "Done"])

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])