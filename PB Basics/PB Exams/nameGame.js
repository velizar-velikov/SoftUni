function nameGame(input) {
    let index = 0;
    let command = input[index];
    let bestResult = 0;
    let winner = "";

    while (command !== "Stop") {
        let currentScore = 0;
        let name = String(command);
        for (let i = 0; i < name.length; i++) {
            index++;
            let num = Number(input[index]);
            if (num === name.charCodeAt(i)) {
                currentScore += 10;
            } else {
                currentScore += 2;
            }
        }
        if (currentScore >= bestResult) {
            bestResult = currentScore;
            winner = name;
        }
        index++;
        command = input[index];
    }
    console.log(`The winner is ${winner} with ${bestResult} points!`);
}
nameGame(["Ivan",
"73",
"20",
"98",
"110",
"Ivo",
"80",
"65",
"87",
"Stop"])