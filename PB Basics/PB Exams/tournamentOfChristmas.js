function tournamentOfChristmas(input) {
    let days = Number(input[0]);
    let index = 1;
    let command = input[index];

    let winCounter = 0;
    let lossCounter = 0;
    let dayWinCounter = 0;
    let dayLossCounter = 0;
    let winnings = 0;
    let finishCounter = 0;
    let dayWinnings = 0;

    while (finishCounter < days) {
        index++;
        command = input[index];

        if (command === "win") {
            dayWinCounter++;
            winCounter++;
            dayWinnings += 20;
        } else if (command === "lose") {
            lossCounter++;
            dayLossCounter++;
        }
        index++;
        command = input[index];

        if (command === "Finish") {
            finishCounter++;
            index++;
            command = input[index];
            if (dayWinCounter > dayLossCounter) {
                dayWinnings *= 1.10;
            }
            winnings += dayWinnings;
            dayWinnings = 0;
            dayWinCounter = 0;
            dayLossCounter = 0;
        }
    }

    if (winCounter > lossCounter) {
        winnings *= 1.20;
        console.log(`You won the tournament! Total raised money: ${winnings.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${winnings.toFixed(2)}`);
    }
}
tournamentOfChristmas(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])