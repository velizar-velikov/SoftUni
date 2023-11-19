function passwordReset(input) {
    let str = input.shift();
    let command = input.shift();

    while (command !== 'Done') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action === 'TakeOdd') {
            let newStr = '';
            for (let i = 0; i < str.length; i++) {
                if (i % 2 !== 0) {
                    newStr += str[i];
                }
            }
            str = newStr;
            console.log(str);
        } else if (action === 'Cut') {
            let [index, length] = tokens;
            str = str.split('');
            str.splice(index, length);
            str = str.join('');
            console.log(str);
        } else if (action == 'Substitute') {
            let [substr, substitude] = tokens;
            if (str.includes(substr)) {
                while (str.includes(substr)) {
                    str = str.replace(substr, substitude);
                }
                console.log(str);
            } else {
                console.log('Nothing to replace!');
            }
        }
        command = input.shift();
    }
    console.log(`Your password is: ${str}`);
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