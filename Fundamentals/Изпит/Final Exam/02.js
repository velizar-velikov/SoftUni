function messageTranslator(input) {
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let command = input.shift();
        let pattern = /!(?<cmd>[A-Z][a-z]{2,})!:\[(?<str>[A-Za-z]{8,})\]/g;
        let match = [...command.matchAll(pattern)];

        if (match.length == 0) {
            console.log('The message is invalid');
        } else {
            let str = match[0].groups.str;
            let translatedStr = str.split('')
                .map(char => char.charCodeAt())
                .join(' ');
            console.log(`${match[0].groups.cmd}: ${translatedStr}`);
        }
    }
}

// messageTranslator(["2",
// "!Send!:[IvanisHere]",
// "*Time@:[Itis5amAlready"])

messageTranslator(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"])