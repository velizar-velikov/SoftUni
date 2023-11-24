function activationKeys([key, ...commands]) {

    while (commands[0] !== 'Generate') {
        let [action, ...tokens] = commands.shift().split('>>>');

        if (action === 'Contains') {
            let substring = tokens[0];
            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (action === 'Flip') {
            let [caseType, startIndex, endIndex] = tokens;
            let substring = key.slice(startIndex, endIndex);
            if (caseType === 'Upper') {
                substring = substring.toUpperCase();
            } else if (caseType === 'Lower') {
                substring = substring.toLowerCase();
            }
            key = key.slice(0, startIndex) + substring + key.slice(endIndex);
            console.log(key);
        } else if (action === 'Slice') {
            let [startIndex, endIndex] = tokens;
            key = key.slice(0, startIndex) + key.slice(endIndex);
            console.log(key);
        }
    }
    console.log(`Your activation key is: ${key}`);
}


activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])

// activationKeys(["134softsf5ftuni2020rockz42",
//     "Slice>>>3>>>7",
//     "Contains>>>-rock",
//     "Contains>>>-uni-",
//     "Contains>>>-rocks",
//     "Flip>>>Upper>>>2>>>8",
//     "Flip>>>Lower>>>5>>>11",
//     "Generate"])