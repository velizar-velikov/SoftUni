function chatLogger(input) {
    let logger = [];

    let command = input.shift();
    while (command != 'end') {
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action == 'Chat') {
            let message = tokens[1];
            logger.push(message);
        } else if (action == 'Delete') {
            let message = tokens[1];
            if (logger.includes(message)) {
                let index = logger.indexOf(message);
                logger.splice(index, 1);
            }
        } else if (action == 'Edit') {
            let message = tokens[1];
            if (logger.includes(message)) {
                let index = logger.indexOf(message);
                let editedMessage = tokens[2];
                logger.splice(index, 1, editedMessage);
            }
        } else if (action == 'Pin') {
            let message = tokens[1];
            let index = logger.indexOf(message);
            if (index != -1) {
                logger.splice(index, 1);
                logger.push(message);
            }
        } else if (action == 'Spam') {
            for (let i = 1; i < tokens.length; i++) {
                let message = tokens[i];
                logger.push(message);
            }
        }
        command = input.shift();
    }
    console.log(logger.join('\n'));
}
// chatLogger(["Chat Hello",
// "Chat darling",
// "Edit darling Darling",
// "Spam how are you",
// "Delete Darling",
// "end"])

// chatLogger(["Chat Hello",
// "Delete John",
// "Pin Hi",
// "end"])

chatLogger(["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"])