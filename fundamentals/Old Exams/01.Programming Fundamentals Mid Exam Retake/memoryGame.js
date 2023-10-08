function memoryGame(input) {
    let arrOfElements = input[0].split(' ');

    let index = 1;
    let command = input[index];
    index++;
    let moves = 0;
    let isWinner = false;

    while (command != 'end') {
        moves++;
        let twoInts = command.split(' ');
        let firstIndex = Number(twoInts[0]);
        let secondIndex = Number(twoInts[1]);

        if ((firstIndex != secondIndex) &&
            (firstIndex >= 0 && firstIndex < arrOfElements.length) &&
            (secondIndex >= 0 && secondIndex < arrOfElements.length)) {
            if (arrOfElements[firstIndex] == arrOfElements[secondIndex]) {
                console.log(`Congrats! You have found matching elements - ${arrOfElements[firstIndex]}!`);
                arrOfElements.splice(firstIndex, 1);
                firstIndex > secondIndex ? arrOfElements.splice(secondIndex, 1) : arrOfElements.splice((secondIndex - 1), 1);
            } else {
                console.log('Try again!');
            }
        } else {
            let elementToAdd = `-${moves}a`;
            let middleOfArr = Math.floor(arrOfElements.length / 2);
            arrOfElements.splice(middleOfArr, 0, elementToAdd);
            arrOfElements.splice(middleOfArr + 1, 0, elementToAdd);
            console.log('Invalid input! Adding additional elements to the board');
        }

        if (arrOfElements.length == 0) {
            isWinner = true;
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        command = input[index];
        index++;
    }

    if (!isWinner) {
        console.log('Sorry you lose :(');
        console.log(arrOfElements.join(' '));
    }
}
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
])