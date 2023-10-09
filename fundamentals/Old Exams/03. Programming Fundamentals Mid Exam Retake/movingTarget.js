function movingTarget(input) {
    let targets = input.shift().split(' ').map(Number);
    let command = input.shift();

    while(command != 'End') {
        let tokens = command.split(' ');
        let action = tokens[0];
        let index = parseInt(tokens[1]);
        let amount = parseInt(tokens[2]);
        
        switch(action) {
            case 'Shoot':
                if (index >= 0 && index < targets.length) {
                    if (amount >= parseInt(targets[index])) {
                       targets.splice(index, 1);
                    } else {
                        targets[index] -= amount;
                    }
                }
            break;
            case 'Add':
                if (index >= 0 && index < targets.length) {
                    targets.splice(index, 0, amount);
                } else {
                    console.log('Invalid placement!');
                }
            break;
            case 'Strike':
                if ((index - amount) >= 0 && (index + amount) < targets.length) {
                    targets.splice((index - amount), (2 * amount + 1));
                } else {
                    console.log('Strike missed!');
                }
            break;
        }
        command = input.shift();
    }
    console.log(targets.join('|'));
}
movingTarget((["1 2 3 4 5",
"Strike 0 1",
"End"]))