function treasureHunt(input) {
    let treasureChest = input.shift().split('|');

    let command = input.shift();
    while (command != 'Yohoho!') {
        let tokens = command.split(' ');
        let action = tokens.shift();
        if (action == 'Loot') {
            for (item of tokens) {
                if (!treasureChest.includes(item)) {
                    treasureChest.unshift(item);
                }
            }
        } else if (action == 'Drop') {
            let index = Number(tokens[0]);
            if (index >= 0 && index < treasureChest.length) {
                let itemToPush = treasureChest.splice(index, 1);
                treasureChest.push(itemToPush);
            }
        } else if (action == 'Steal') {
            let stolenCount = Number(tokens[0]);
            let stolenLength = stolenCount <= treasureChest.length ? stolenCount : treasureChest.length;
            let stolenItems = treasureChest.splice(treasureChest.length - stolenLength, stolenLength);
            console.log(stolenItems.join(', '));
        }
        command = input.shift();
    }

    if (treasureChest.length) {
        let sum = treasureChest.reduce((acc, item) => acc + item.length, 0);
        let avgTreasureGain = (sum / treasureChest.length).toFixed(2);
        console.log(`Average treasure gain: ${avgTreasureGain} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
treasureHunt((["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]))