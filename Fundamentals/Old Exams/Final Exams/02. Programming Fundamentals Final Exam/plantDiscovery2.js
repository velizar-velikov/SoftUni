function plantDiscovery(input) {
    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split('<->');
        rarity = Number(rarity);
        if (plant in plants) {
            plants[plant].rarity = rarity;
        } else {
            plants[plant] = {
                'rarity': rarity,
                'ratings': []
            };
        }
    }

    let command = input.shift();

    while (command !== 'Exhibition') {
        let [action, tokens] = command.split(': ');
        let infoTokens = tokens.split(' - ');
        let plant = infoTokens.shift();
        if (!plants.hasOwnProperty(plant)) {
            console.log('error');
            command = input.shift();
            continue;
        }
        if (action == 'Rate') {
            let rating = Number(infoTokens.shift());
            plants[plant].ratings.push(rating);
        } else if (action == 'Update') {
            let newRarity = infoTokens.shift();
            plants[plant].rarity = newRarity;
        } else if (action == 'Reset') {
            plants[plant].ratings = [];
        }
        command = input.shift();
    }
    console.log('Plants for the exhibition:');
    for (let [plant, { rarity, ratings }] of Object.entries(plants)) {
        let avgRating = 0;
        if (ratings.length != 0) {
            avgRating = ratings.reduce((acc, value) => acc + value, 0) / ratings.length;
        }
        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${avgRating.toFixed(2)}`);
    }
}

// plantDiscovery(["3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"])

plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])