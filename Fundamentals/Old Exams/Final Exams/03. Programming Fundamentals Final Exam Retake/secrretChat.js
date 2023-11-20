function secretChat(input) {
    let message = input.shift();

    let command = input.shift();

    while (command !== 'Reveal') {
        let tokens = command.split(':|:');
        let action = tokens.shift();

        if (action === 'InsertSpace') {
            let index = tokens[0];
            message = message.split('');
            message.splice(index, 0, ' ');
            message = message.join('');
            console.log(message);
        } else if (action === 'Reverse') {
            let substr = tokens[0];
            if (message.includes(substr)) {
                message = message.replace(substr, '');
                message += substr.split('').reverse().join('');
                console.log(message);
            } else {
                console.log('error');
            }
        } else if (action === 'ChangeAll') {
            let substr = tokens[0];
            let replacement = tokens[1];
            while (message.includes(substr)) {
                message = message.replace(substr, replacement);
            }
            console.log(message);
        }
        command = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
//   ])

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])