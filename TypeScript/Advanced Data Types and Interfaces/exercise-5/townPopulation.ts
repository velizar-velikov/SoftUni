type TownsObject = {
    [key: string]: number;
};

init(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);

function init(townsInfo: string[]): void {
    const towns: TownsObject = createTownsObject(townsInfo);
    logTowns(towns);
}

function createTownsObject(townsInfo: string[]): TownsObject {
    const townsObject: TownsObject = {};

    townsInfo.forEach((townInfo) => {
        const town: string = townInfo.split(' <-> ')[0];
        const population: number = Number(townInfo.split(' <-> ')[1]);

        if (town in townsInfo) {
            townsObject[town] += population;
        } else {
            townsObject[town] = population;
        }
    });

    return townsObject;
}

function logTowns(towns: TownsObject): void {
    for (const town in towns) {
        console.log(`${town}: ${towns[town]}`);
    }
}
