function secretChat(input) {
    let message = input.shift().split('');

    let command = input.shift();
    while (command != 'Reveal') {
        let tokens = command.split(':|:');
        let action = tokens.shift();

        if (action == 'InsertSpace') {
            let index = Number(tokens[0]);
            let space = ' ';
            message.splice(index, 0, space);
        } else if (action == 'Reverse') {
            let substring = tokens[0].split('');
            let isIn = true;
            for (let i = 0; i < substring.length; i++) {
                if (!message.includes(substring[i])) {
                    isIn = false;
                    console.log('error');
                    break;
                }
            }
            if (!isIn) {
                command = input.shift();
                continue;
            }
            if (isIn) {
                let index = message.indexOf(substring[0]);
                substring.reverse();
                for (let i = 0; i < substring.length; i++) {
                    message[index + i] = substring[i];
                }
            }
        } else {
            let substring = tokens[0];
            let replacement = tokens[1];
            for (let i = 0; i < message.length; i++) {
                if (message[i] == substring) {
                    message[i] = replacement;
                }
            }
        }
        console.log(message.join(''));
        command = input.shift();
    }
    console.log(`You have a new text message: ${message.join('')}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])