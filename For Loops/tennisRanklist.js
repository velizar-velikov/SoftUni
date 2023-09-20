function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let stage = 0;
    let earnedPoints = 0;
    let wins = 0;


    for (let i = 2; i < input.length; i++) {
        stage = input[i];
        switch (stage) {
            case "W":
                earnedPoints += 2000;
                wins++;
                break;
            case "F": earnedPoints += 1200; break;
            case "SF": earnedPoints += 720; break;
        }
    }
    let totalPoints = startingPoints + earnedPoints;
    let avgPoints = earnedPoints / tournaments;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${(wins / tournaments * 100).toFixed(2)}%`);
}
tennisRanklist(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"])