function manWar(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());

    let command = input.shift();
    while (command != 'Retire') {
        let tokens = command.split(' ');
        let action = tokens.shift();
        tokens = tokens.map(Number);

        if (action == 'Fire') {
            let index = tokens[0];
            let damage = tokens[1];
            if (index >= 0 && index < warShip.length) {
                warShip[index] -= damage;
            }
            if (warShip[index] <= 0) {
                console.log('You won! The enemy ship has sunken.');
                return;
            }
        } else if (action == 'Defend') {
            let startIndex = tokens[0];
            let endIndex = tokens[1];
            let damage = tokens[2];
            if (startIndex >= 0 && endIndex < pirateShip.length) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                }
            }
        } else if (action == 'Repair') {
            let index = tokens[0];
            let health = tokens[1];
            if (index >= 0 && index < pirateShip.length) {
                pirateShip[index] += health;
            }
            if (pirateShip[index] > maxHealth) {
                pirateShip[index] = maxHealth;
            }
        } else if (action == 'Status') {
            let sectionsNeedingRepair = pirateShip.filter(a => a < 0.20 * maxHealth);
            console.log(`${sectionsNeedingRepair.length} sections need repair.`);
        }
        command = input.shift();
    }
    let sumPirateShip = pirateShip.reduce((acc, item) => acc + item, 0);
    let sumWarShip = warShip.reduce((acc, item) => acc + item, 0);
    console.log(`Pirate ship status: ${sumPirateShip}`);
    console.log(`Warship status: ${sumWarShip}`);
}
manWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])