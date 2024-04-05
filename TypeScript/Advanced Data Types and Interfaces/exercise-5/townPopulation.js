"use strict";
init(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
function init(townsInfo) {
    const towns = createTownsObject(townsInfo);
    logTowns(towns);
}
function createTownsObject(townsInfo) {
    const townsObject = {};
    townsInfo.forEach((townInfo) => {
        const town = townInfo.split(' <-> ')[0];
        const population = Number(townInfo.split(' <-> ')[1]);
        if (town in townsInfo) {
            townsObject[town] += population;
        }
        else {
            townsObject[town] = population;
        }
    });
    return townsObject;
}
function logTowns(towns) {
    for (const town in towns) {
        console.log(`${town}: ${towns[town]}`);
    }
}
//# sourceMappingURL=townPopulation.js.map