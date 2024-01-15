const heroicInventory = (input) => JSON.stringify(
    input.map(info => {
        let [name, level, items] = info.split(' / ');
        items = items ? items.split(', ') : [];
        return {
            name,
            level: Number(level),
            items
        }
    })
)

const res = heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
console.log(res);