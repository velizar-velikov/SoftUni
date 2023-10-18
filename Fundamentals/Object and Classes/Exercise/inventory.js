function createHeroesRegister(input) {

    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items
        }
    }
    let heroes = [];

    for (let info of input) {
        let [name, level, items] = info.split(' / ');
        let hero = new Hero(name, level, items);
        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(a => console.log(`Hero: ${a.name}\nlevel => ${a.level}\nitems => ${a.items}`));

}
createHeroesRegister([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
])