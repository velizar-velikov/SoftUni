"use strict";
class Town {
    town;
    latitude;
    longitude;
    constructor(town, latitude, longitude) {
        this.town = town;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
const createTowns = (townsInfo) => {
    const towns = [];
    townsInfo.forEach((townInfo) => {
        const townsInfoArray = townInfo.split(' | ');
        const town = townsInfoArray[0];
        const latitude = Number(Number(townsInfoArray[1]).toFixed(2));
        const longitude = Number(Number(townsInfoArray[2]).toFixed(2));
        towns.push(new Town(town, latitude, longitude));
    });
    return towns;
};
const printTowns = (towns) => {
    towns.forEach((town) => {
        console.log(town);
    });
};
const towns = createTowns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
printTowns(towns);
//# sourceMappingURL=towns.js.map