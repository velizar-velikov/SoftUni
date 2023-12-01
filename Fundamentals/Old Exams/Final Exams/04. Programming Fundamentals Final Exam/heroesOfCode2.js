function heroesOfCode(input) {
    let n = Number(input.shift());
    let heroes = {};
    for (let i = 0; i < n; i++) {
        let [hero, hp, mp] = input.shift().split(' ');
        heroes[hero] = { 'hp': Number(hp), 'mp': Number(mp) };
    }

    let command = input.shift();
    while (command !== 'End') {
        let [action, hero, ...tokens] = command.split(' - ');
        if (action === 'CastSpell') {
            let [mpNeeded, spell] = tokens;
            mpNeeded = Number(mpNeeded);
            if (heroes[hero].mp >= mpNeeded) {
                heroes[hero].mp -= mpNeeded;
                console.log(`${hero} has successfully cast ${spell} and now has ${heroes[hero].mp} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spell}!`);
            }
        } else if (action === 'TakeDamage') {
            let [damage, attacker] = tokens;
            damage = Number(damage);
            heroes[hero].hp -= damage;
            if (heroes[hero].hp > 0) {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
            } else {
                delete heroes[hero];
                console.log(`${hero} has been killed by ${attacker}!`);
            }
        } else if (action === 'Recharge') {
            let amount = Number(tokens[0]);
            let initialMP = heroes[hero].mp;
            heroes[hero].mp += amount;
            if (heroes[hero].mp > 200) {
                heroes[hero].mp = 200;
                amount = 200 - initialMP;
            }
            console.log(`${hero} recharged for ${amount} MP!`);
        } else if (action === 'Heal') {
            let amount = Number(tokens[0]);
            let initialHP = heroes[hero].hp;
            heroes[hero].hp += amount;
            if (heroes[hero].hp > 100) {
                heroes[hero].hp = 100;
                amount = 100 - initialHP;
            }
            console.log(`${hero} healed for ${amount} HP!`);
        }
        command = input.shift();
    }

    for (let [hero, { hp, mp }] of Object.entries(heroes)) {
        console.log(hero);
        console.log(`  HP: ${hp}`);
        console.log(`  MP: ${mp}`);
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