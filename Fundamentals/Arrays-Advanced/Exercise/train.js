function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());

    while (input.length > 0) {
        let num
        command = input.shift();
        if (command.includes(' ')) {
            let tokens = command.split(' ');
            num = Number(tokens[1]);
            wagons.push(num);
        } else {
            num = Number(command);
            findSpaceOnWagon(num);
            function findSpaceOnWagon(num) {
                for (let i = 0; i < wagons.length; i++) {
                    if (wagons[i] + num <= maxCapacity) {
                        wagons[i] += num;
                        break;
                    }
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])