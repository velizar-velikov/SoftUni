function treasureHunt(input) {
    let treasure = input.shift().split('|');

    let command = input.shift();
    while (command != 'Yohoho!') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action == 'Loot') {
            for (let item of tokens) {
                if (!treasure.includes(item)) {
                    treasure.unshift(item);
                }
            }
        } else if (action == 'Drop') {
            let index = Number(tokens[0]);
            if (index >= 0 && index < treasure.length) {
                let removedLoot = treasure.splice(index, 1);
                treasure.push(removedLoot[0]);
            }
        } else if (action == 'Steal') {
            let count = tokens[0];
            let lootsToRemove = count <= treasure.length ? count : treasure.length;
            let stolenLoots = treasure.splice(-count, lootsToRemove);
            console.log(stolenLoots.join(', '));
        }

        command = input.shift();
    }
    let sumItemsLength = treasure.reduce((sum, item) => sum + item.length, 0);
    if (treasure.length == 0) {
        console.log('Failed treasure hunt.');
    } else {
        let avgTreasureGain = (sumItemsLength / treasure.length).toFixed(2);
        console.log(`Average treasure gain: ${avgTreasureGain} pirate credits.`);
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])