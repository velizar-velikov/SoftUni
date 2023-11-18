function heartDelivery(input) {
    let houses = input.shift().split('@').map(Number);

    let index = 0;
    let command = input.shift();
    while (command != 'Love!') {
        let tokens = command.split(' ');
        let length = Number(tokens[1]);
        index += length;
        if (index > houses.length - 1) {
            index = 0;
        }
        if (houses[index] == 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            houses[index] -= 2;
            if (houses[index] == 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
        command = input.shift();
    }
    let housesFailed = 0;
    for (let item of houses) {
        if (item != 0) {
            housesFailed++;
        }
    }

    console.log(`Cupid's last position was ${index}.`);
    if (housesFailed == 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${housesFailed} places.`);
    }
}
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])