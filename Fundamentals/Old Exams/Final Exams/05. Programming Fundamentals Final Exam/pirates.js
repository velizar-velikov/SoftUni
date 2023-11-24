function pirates(input) {

    let a = ['-5'].map(Number);
    class City {
        constructor(population, gold) {
            this.population = Number(population);
            this.gold = Number(gold);
        }
    }

    let cities = {};
    let command = input.shift();

    while (command !== 'Sail') {
        let [town, population, gold] = command.split('||');
        if (cities.hasOwnProperty(town)) {
            cities[town].population += Number(population);
            cities[town].gold += Number(gold);
        } else {
            cities[town] = new City(population, gold);
        }
        command = input.shift();
    }
    command = input.shift();

    while (command !== 'End') {
        let [action, town, ...tokens] = command.split('=>');
        tokens = tokens.map(Number);
        if (action === 'Plunder') {
            let [people, gold] = tokens;
            cities[town].population -= people;
            cities[town].gold -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (cities[town].population <= 0 || cities[town].gold <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            }
        } else if (action === 'Prosper') {
            let gold = tokens[0];
            if (gold >= 0) {
                cities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            } else {
                console.log('Gold added cannot be a negative number!');
            }
        }
        command = input.shift();
    }
    if (Object.keys(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (let [town, { population, gold }] of Object.entries(cities)) {
            console.log(`${town} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

// pirates(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])