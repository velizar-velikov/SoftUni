function basketballTournament(input) {
    let index = 0;
    let command = input[index];
    let winCounter = 0;
    let lossCounter = 0;

    while (command !== "End of tournaments") {
        let tournamentName = command;
        let matchCounter = 0;
        index++;
        command = input[index];
        let matchesForCurrentTournament = Number(command);
        for (let i = 1; i <= (matchesForCurrentTournament); i++) {
            index++;
            let desyTeamScore = Number(input[index]);
            index++;
            let otherTeamScore = Number(input[index]);
            matchCounter++;
            if (desyTeamScore > otherTeamScore) {
                winCounter++;
                console.log(`Game ${matchCounter} of tournament ${tournamentName}: win with ${desyTeamScore - otherTeamScore} points.`);
            } else {
                lossCounter++;
                console.log(`Game ${matchCounter} of tournament ${tournamentName}: lost with ${otherTeamScore - desyTeamScore} points.`);
            }
        }
        index++;
        command = input[index];
    }
    console.log(`${(winCounter / (winCounter + lossCounter) * 100).toFixed(2)}% matches win`);
    console.log(`${(lossCounter / (winCounter + lossCounter) * 100).toFixed(2)}% matches lost`);

}
basketballTournament(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"])