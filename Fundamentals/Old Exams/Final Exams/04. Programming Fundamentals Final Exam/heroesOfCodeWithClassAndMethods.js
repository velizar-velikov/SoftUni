function heroesOfCode(input) {
    class Hero {
        constructor(hero, HP, MP) {
            this.hero = hero,
                this.hp = Number(HP),
                this.mp = Number(MP)
        }

        CastSpell(tokens) {
            let [mpNeeded, spellName] = tokens;
            if (this.mp >= Number(mpNeeded)) {
                this.mp -= Number(mpNeeded);
                console.log(`${this.hero} has successfully cast ${spellName} and now has ${this.mp} MP!`);
            } else {
                console.log(`${this.hero} does not have enough MP to cast ${spellName}!`);
            }
        }

        TakeDamage(tokens) {
            let [damage, attacker] = tokens;
            this.hp -= Number(damage);
            if (this.hp > 0) {
                console.log(`${this.hero} was hit for ${damage} HP by ${attacker} and now has ${this.hp} HP left!`);
            } else {
                console.log(`${this.hero} has been killed by ${attacker}!`);
                delete heroes[this.hero];
            }
        }

        Recharge(tokens) {
            let [amount] = tokens;
            this.mp += Number(amount);
            if (this.mp > 200) {
                amount -= this.mp - 200;
                this.mp = 200;
            }
            console.log(`${this.hero} recharged for ${amount} MP!`);
        }

        Heal(tokens) {
            let [amount] = tokens;
            this.hp += Number(amount);
            if (this.hp > 100) {
                amount -= this.hp - 100;
                this.hp = 100;
            }
            console.log(`${this.hero} healed for ${amount} HP!`);
        }
    }

    let n = Number(input.shift());
    let heroes = {};

    createHero(input);

    let command = input.shift();

    while (command !== 'End') {
        let tokens = command.split(' - ');
        let action = tokens.shift();
        let hero = tokens.shift();
        heroes[hero][action](tokens);
        command = input.shift();
    }
    printInfo();

    function createHero(input) {
        for (let i = 0; i < n; i++) {
            let command = input.shift().split(' ');
            let [hero, HP, MP] = command;
            heroes[hero] = new Hero(hero, HP, MP);
        }
    }


    function printInfo() {
        for (let hero in heroes) {
            console.log(hero);
            console.log(`  HP: ${heroes[hero]['hp']}`);
            console.log(`  MP: ${heroes[hero]['mp']}`);
        }
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