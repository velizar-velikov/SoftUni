function counterStrike(input) {
    let energy = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;

    let wonBattlesCount = 0;

    while (command != 'End of battle') {
        let neededEnergyForEnemy = Number(command);
        if (energy < neededEnergyForEnemy) {
            console.log(`Not enough energy! Game ends with ${wonBattlesCount} won battles and ${energy} energy`);
            break;
        } else {
            wonBattlesCount++;
            energy -= neededEnergyForEnemy;
        }
        if (wonBattlesCount % 3 == 0) {
            energy += wonBattlesCount;
        }
        command = input[index];
        index++;
    }

    if (command == 'End of battle') {
        console.log(`Won battles: ${wonBattlesCount}. Energy left: ${energy}`);
    }
}
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])