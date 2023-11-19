function heroesOfCode(input) {

    let n = Number(input.shift());
    let inputLength = input.length;

    let heroes = {};

    while (input.length !== inputLength - n) {
        let command = input.shift().split(' ');
        let [hero, HP, MP] = command;
        heroes[hero] = {};
        heroes[hero]['hp'] = Number(HP);
        heroes[hero]['mp'] = Number(MP);
    }

    let command = input.shift();

    while (command !== 'End') {
        let tokens = command.split(' - ');
        let action = tokens.shift();
        let hero = tokens.shift();

        if (action === 'CastSpell') {
            let [mpNeeded, spellName] = tokens;
            if (heroes[hero]['mp'] >= Number(mpNeeded)) {
                heroes[hero]['mp'] -= Number(mpNeeded);
                console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero]['mp']} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`);
            }
        } else if (action === 'TakeDamage') {
            let [damage, attacker] = tokens;
            heroes[hero]['hp'] -= Number(damage);
            if (heroes[hero]['hp'] > 0) {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero]['hp']} HP left!`);
            } else {
                console.log(`${hero} has been killed by ${attacker}!`);
                delete heroes[hero];
            }
        } else if (action === 'Recharge') {
            let [amount] = tokens;
            heroes[hero]['mp'] += Number(amount);
            if (heroes[hero]['mp'] > 200) {
                amount -= heroes[hero]['mp'] - 200;
                heroes[hero]['mp'] = 200;
            }
            console.log(`${hero} recharged for ${amount} MP!`);
        } else if (action === 'Heal') {
            let [amount] = tokens;
            heroes[hero]['hp'] += Number(amount);
            if (heroes[hero]['hp'] > 100) {
                amount -= heroes[hero]['hp'] - 100;
                heroes[hero]['hp'] = 100;
            }
            console.log(`${hero} healed for ${amount} HP!`);
        }

        command = input.shift();
    }

    for (let hero in heroes) {
        console.log(hero);
        console.log(`  HP: ${heroes[hero]['hp']}`);
        console.log(`  MP: ${heroes[hero]['mp']}`);
    }
}
// heroesOfCode([
//     "2",
//     "Solmyr 85 120",
//     "Kyrre 99 50",
//     "Heal - Solmyr - 10",
//     "Recharge - Solmyr - 50",
//     "TakeDamage - Kyrre - 66 - Orc",
//     "CastSpell - Kyrre - 15 - ViewEarth",
//     "End"
//     ])

heroesOfCode([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
])