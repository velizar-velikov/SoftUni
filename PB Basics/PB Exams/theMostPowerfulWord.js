function theMostPowerfulWord(input) {
    let index = 0;
    let command = input[index];
    let maxSum = 0;
    let wordWinner = "";

    while (command !== "End of words") {
        let word = String(command);
        let currentSum = 0;
        for (let i = 0; i < word.length; i++) {
            let ch = word.charCodeAt(i);
            currentSum += ch;
        }
        if (word[0] === "A" || word[0] === "a" || word[0] === "E" || word[0] === "e" || word[0] === "I" || word[0] === "i" || word[0] === "O" || word[0] === "o" || word[0] === "U" || word[0] === "u" || word[0] === "Y" || word[0] === "y") {
            currentSum *= word.length;
        } else {
            currentSum /= Math.floor(word.length);
        }
        if (currentSum >= maxSum) {
            maxSum = currentSum;
            wordWinner = word;
        }
        index++;
        command = input[index];
    }
    console.log(`The most powerful word is ${wordWinner} - ${maxSum}`);
}
theMostPowerfulWord(["But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"])