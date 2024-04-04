"use strict";
const createInvetory = (inventoryInfo) => {
    const inventory = [];
    inventoryInfo.forEach((infoRow) => {
        const infoRowArray = infoRow.split(' / ');
        const hero = infoRowArray[0];
        const level = Number(infoRowArray[1]);
        const items = infoRowArray[2].split(', ');
        const heroObj = {
            Hero: hero,
            level,
            items,
        };
        inventory.push(heroObj);
    });
    return inventory;
};
const printInventorySorted = (inventory) => {
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
//# sourceMappingURL=inventory.js.map