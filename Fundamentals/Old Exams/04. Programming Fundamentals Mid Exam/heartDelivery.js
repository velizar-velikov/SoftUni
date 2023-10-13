function heartDelivery(input) {
    let houses = input.shift().split('@').map(Number);

    let command = input.shift();
    let indexOfHouse = 0;
    while (command != 'Love!') {
        let tokens = command.split(' ');
        let jumpLength = Number(tokens[1]);
        if (indexOfHouse + jumpLength <= houses.length - 1) {
            indexOfHouse += jumpLength;
        } else {
            indexOfHouse = 0;
        }
        if (houses[indexOfHouse] == 0) {
            console.log(`Place ${indexOfHouse} already had Valentine's day.`);
        } else if (houses[indexOfHouse] - 2 >= 0) {
            houses[indexOfHouse] -= 2;
            if (houses[indexOfHouse] == 0) {
                console.log(`Place ${indexOfHouse} has Valentine's day.`);
            }
        }
        command = input.shift();
    }
    console.log(`Cupid's last position was ${indexOfHouse}.`);
    let noValentinesCount = 0;
    for (let house of houses) {
        if (house != 0) {
            noValentinesCount++;
        }
    }

    if (noValentinesCount == 0) {
        console.log('Mission was successful');
    } else {
        console.log(`Cupid has failed ${noValentinesCount} places.`);
    }
}
heartDelivery(["2@2@12",
    "Jump 4",
    "Jump 2",
    "Jump 1",
    "Jump 1",
    "Jump 3",
    "Love!"])
// heartDelivery(['0', 'Love!'])