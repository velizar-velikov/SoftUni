function heartDelivery(input) {
    let houses = input.shift().split('@').map(Number);

    let indexOfHouse = 0;
    let command = input.shift();
    while (command != 'Love!') {
        let tokens = command.split(' ');
        let jumpLength = Number(tokens[1]);
        indexOfHouse += jumpLength;
        if (indexOfHouse > houses.length - 1) {
            indexOfHouse = 0;
        }
        if (houses[indexOfHouse] == 0) {
            console.log(`Place ${indexOfHouse} already had Valentine's day.`);
        } else {
            houses[indexOfHouse] -= 2;
            if (houses[indexOfHouse] == 0) {
                console.log(`Place ${indexOfHouse} has Valentine's day.`);
            }
        }
        command = input.shift();
    }
    let noValentinesCount = 0;
    for (let item of houses) {
        if (item != 0) {
            noValentinesCount++;
        }
    }
    
    console.log(`Cupid's last position was ${indexOfHouse}.`);
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