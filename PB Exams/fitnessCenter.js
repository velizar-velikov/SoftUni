function fitnessCenter(input) {
    let people = Number(input[0]);

    let backCounter = 0;
    let chestCounter = 0;
    let legsCounter = 0;
    let absCounter = 0;
    let proteinShakeCounter = 0;
    let proteinBarCounter = 0;

    for (let i = 1; i <= people; i++) {
        let command = input[i];
        if (command === "Back") {
            backCounter++;
        } else if (command === "Chest") {
            chestCounter++;
        } else if (command === "Legs") {
            legsCounter++;
        } else if (command === "Abs") {
            absCounter++;
        } else if (command === "Protein shake") {
            proteinShakeCounter++;
        } else if (command === "Protein bar") {
            proteinBarCounter++;
        }
    }
    let workoutPeople = backCounter + chestCounter + legsCounter + absCounter;
    console.log(`${backCounter} - back`);
    console.log(`${chestCounter} - chest`);
    console.log(`${legsCounter} - legs`);
    console.log(`${absCounter} - abs`);
    console.log(`${proteinShakeCounter} - protein shake`);
    console.log(`${proteinBarCounter} - protein bar`);
    console.log(`${((workoutPeople / people) * 100).toFixed(2)}% - work out`);
    console.log(`${(((proteinShakeCounter + proteinBarCounter) / people) * 100).toFixed(2)}% - protein`);
}
fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])