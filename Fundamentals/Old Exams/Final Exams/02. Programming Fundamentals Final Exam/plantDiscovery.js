function plantDiscovery(input) {

    let n = Number(input.shift());

    let countLines = 1;
    let plants = {};

    while (countLines <= n) {
        let command = input.shift();
        let [plant, rarity] = command.split('<->');
        if (plant in plants) {
            plants[plant]['rarity'] = Number(rarity);
        } else {
            plants[plant] = {};
            plants[plant]['rarity'] = Number(rarity);
        }
        countLines++;
    }
    
    let command = input.shift();
    
    while (command !== 'Exhibition') {
        let [action, info] = command.split(': ');
        
        if (action === 'Rate') {
            let [plant, rating] = info.split(' - ');
            if (plant in plants) {
                if ('ratings' in plants[plant]) {
                    plants[plant]['ratings'].push(Number(rating));
                } else {
                    plants[plant]['ratings'] = [];
                    plants[plant]['ratings'].push(Number(rating));
                }
            } else {
                console.log('error');
            }
        } else if (action === 'Update') {
            let [plant, newRarity] = info.split(' - ');
            if (plant in plants) {
                plants[plant]['rarity'] = newRarity;
            } else {
                console.log('error');
            }
        } else if (action === 'Reset') {
            let plant = info;
            if (plant in plants) {
                delete plants[plant]['ratings'];
            } else {
                console.log('error');
            }
        }
        command = input.shift();
    }

    console.log('Plants for the exhibition:');
    for (let plant in plants) {
        if (!plants[plant].hasOwnProperty('ratings')) {
            console.log(`- ${plant}; Rarity: ${plants[plant]['rarity']}; Rating: 0.00`);
        } else {
            let avgPlantRating = (plants[plant]['ratings'].reduce((acc, rating) => acc + rating) / plants[plant]['ratings'].length).toFixed(2);
            console.log(`- ${plant}; Rarity: ${plants[plant]['rarity']}; Rating: ${avgPlantRating}`);
        }
    }
}

plantDiscovery(["5",
"Arnoldii<->4",
"Woodii<->7",
"Velio<->21",
"Velio<->22",
"Velio<->18",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Reset: Welwitschia",
"Reset: Velio",
"Exhibition"])

// plantDiscovery(["2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"])