//66/100 точки
function gameNumberWars(input) {
    let nameFirstPlayer = input[0];
    let nameSecondPlayer = input[1];
    let index = 2;
    let command = input[index];
    let scoreFirstPlayer = 0;
    let scoreSecondPlayer = 0;
    let winner = "";
    let winnerScore = 0;
    let isWinner = false;

    while (command !== "End of game") {

        let firstPlayerCard = Number(input[index]);
        index++;
        let secondPlayerCard = Number(input[index]);
        if (firstPlayerCard > secondPlayerCard) {
            scoreFirstPlayer += (firstPlayerCard - secondPlayerCard);
        } else if (secondPlayerCard > firstPlayerCard) {
            scoreSecondPlayer += (secondPlayerCard - firstPlayerCard);
        } else {
            isWinner = true;
            index++;
            firstPlayerCard = Number(input[index]);
            index++;
            secondPlayerCard = Number(input[index]);
            console.log('Number wars!');
            if (scoreFirstPlayer > scoreSecondPlayer) {
                winner = nameFirstPlayer;
                winnerScore = scoreFirstPlayer;
            } else if (scoreSecondPlayer > scoreFirstPlayer) {
                winner = nameSecondPlayer;
                winnerScore = scoreSecondPlayer;
            }
            console.log(`${winner} is winner with ${winnerScore} points`);
            break;
        }
        index++;
        command = input[index];
    }
    if (!isWinner) {
        console.log(`${nameFirstPlayer} has ${scoreFirstPlayer} points`);
        console.log(`${nameSecondPlayer} has ${scoreSecondPlayer} points`);
    }
}
gameNumberWars(["Aleks",
    "Georgi",
    "4",
    "5",
    "3",
    "2",
    "4",
    "3",
    "4",
    "4",
    "5",
    "2"])