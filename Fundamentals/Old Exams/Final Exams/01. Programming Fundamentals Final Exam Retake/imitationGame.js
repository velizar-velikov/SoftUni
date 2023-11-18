function imitationGame(input) {
    let message = input.shift();

    let command = input.shift();

    while (command !== 'Decode') {

        let tokens = command.split('|');
        let action = tokens[0];

        if (action == 'Move') {
            let numberOfLetter = tokens[1];
            let firstNLetter = message.substring(0, numberOfLetter);
            message = message.replace(firstNLetter, '');
            message += firstNLetter;
        } else if (action == 'Insert') {
            let index = Number(tokens[1]);
            let value = tokens[2];
            message = message.split('');
            message.splice(index, 0, value);
            message = message.join('');
        } else if (action == 'ChangeAll') {
            let substr = tokens[1];
            let replacement = tokens[2];
            message = message.split('');
            for (let i = 0; i < message.length; i++) {
                if (message[i] == substr) {
                    message.splice(i, 1, replacement);
                }
            }
            message = message.join('');          
        }
        command = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ])

// imitationGame([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode'
// ])