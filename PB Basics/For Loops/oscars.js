function oscars(input) {
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let judges = Number(input[2]);

    let judgeName = "";
    let judgePoints = 0;

    for (let i = 3; i < input.length; i++) {
        judgeName = input[i];
        i++;
        judgePoints = Number(input[i]);
        startingPoints += judgeName.length * judgePoints / 2;

        if (startingPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
            break;
        }
    }
    if (startingPoints <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])