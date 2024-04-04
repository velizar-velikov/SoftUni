interface TownType {
    town: string;
    latitude: number;
    longitude: number;
}

type TownCreator = {
    (townInfo: string[]): TownType[];
};

type TownPrinter = {
    (towns: TownType[]): void;
};

class Town implements TownType {
    town: string;
    latitude: number;
    longitude: number;

    constructor(town: string, latitude: number, longitude: number) {
        this.town = town;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

const createTowns: TownCreator = (townsInfo: string[]): TownType[] => {
    const towns: TownType[] = [];

    townsInfo.forEach((townInfo) => {
        const townsInfoArray: string[] = townInfo.split(' | ');

        const town: string = townsInfoArray[0];
        const latitude: number = Number(Number(townsInfoArray[1]).toFixed(2));
        const longitude: number = Number(Number(townsInfoArray[2]).toFixed(2));

        towns.push(new Town(town, latitude, longitude));
    });

    return towns;
};

const printTowns: TownPrinter = (towns: TownType[]): void => {
    towns.forEach((town) => {
        console.log(town);
    });
};

const towns: TownType[] = createTowns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);

printTowns(towns);
