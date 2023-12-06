function stringGame(input) {
    let str = input.shift();
    let command = input.shift();

    while (command !== 'Done') {
        let [action, ...tokens] = command.split(' ');
        if (action === 'Change') {
            let [char, replacement] = tokens;
            str = str.split(char).join(replacement);
            console.log(str);
        } else if (action === 'Includes') {
            let substr = tokens[0];
            if (str.includes(substr)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (action === 'End') {
            let substr = tokens[0];
            if (str.lastIndexOf(substr) + substr.length == str.length) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (action === 'Uppercase') {
            str = str.toUpperCase();
            console.log(str);
        } else if (action === 'FindIndex') {
            let char = tokens[0];
            console.log(str.indexOf(char));
        } else if (action === 'Cut') {
            let [startIndex, count] = tokens.map(Number);
            let cutPart = str.slice(startIndex, startIndex + count);
            str = str.replace(cutPart, '');
            console.log(cutPart);
        }
        command = input.shift();
    }
}

// stringGame(["//Th1s 1s my str1ng!//",
//     "Change 1 i",
//     "Includes string",
//     "End my",
//     "Uppercase",
//     "FindIndex I",
//     "Cut 5 5",
//     "Done"])

stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])