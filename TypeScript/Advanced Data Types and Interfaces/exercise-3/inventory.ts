interface Hero {
    Hero: string;
    level: number;
    items: string[];
}

// describing a function type
type CreatorInventory = {
    (inventoryInfo: string[]): Hero[];
};

const createInvetory: CreatorInventory = (inventoryInfo: string[]): Hero[] => {
    const inventory: Hero[] = [];

    inventoryInfo.forEach((infoRow) => {
        const infoRowArray: string[] = infoRow.split(' / ');

        const hero: string = infoRowArray[0];
        const level: number = Number(infoRowArray[1]);
        const items: string[] = infoRowArray[2].split(', ');

        const heroObj: Hero = {
            Hero: hero,
            level,
            items,
        };

        inventory.push(heroObj);
    });

    return inventory;
};

const printInventorySorted = (inventory: Hero[]): void => {
    inventory
        .sort((a, b) => a.level - b.level)
        .forEach((heroObj) => {
            console.log(`Hero: ${heroObj.Hero}`);
            console.log(`level => ${heroObj.level}`);
            console.log(`items => ${heroObj.items.join(', ')}`);
        });
};

const inventory = createInvetory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);

printInventorySorted(inventory);
