function arenaTier(input) {

    let command = input.shift();
    let gladiatorPool = {};

    let totalSkill = {};

    while (command != 'Ave Cesar') {
        if (command.includes('->')) {
            let [gladiator, technique, skill] = command.split(' -> ');
            skill = Number(skill);
            if (gladiator in gladiatorPool) {
                if (technique in gladiatorPool[gladiator]) {
                    if (gladiatorPool[gladiator][technique] < skill) {
                        gladiatorPool[gladiator][technique] = skill;
                        totalSkill[gladiator] = skill;
                    }
                } else {
                    gladiatorPool[gladiator][technique] = skill;
                    totalSkill[gladiator] += skill;
                }
            } else {
                gladiatorPool[gladiator] = {};
                gladiatorPool[gladiator][technique] = skill;
                totalSkill[gladiator] = skill;
            }


        } else {
            let [gladiator1, gladiator2] = command.split(' vs ');
            if (gladiator1 in gladiatorPool && gladiator2 in gladiatorPool) {
                let commonTechnique = false;
                for (let technique in gladiatorPool[gladiator1]) {
                    if (technique in gladiatorPool[gladiator2]) {
                        commonTechnique = true;
                        break;
                    }
                }

                if (commonTechnique) {
                    // let totalSkillGlad1 = 0;
                    // let totalSkillGlad2 = 0;
                    // Object.values(gladiatorPool[gladiator1]).forEach(skill => totalSkillGlad1 + skill);
                    // Object.values(gladiatorPool[gladiator2]).forEach(skill => totalSkillGlad2 + skill);

                    if (totalSkill[gladiator1] > totalSkill[gladiator2]) {
                        delete gladiatorPool[gladiator2];
                        delete totalSkill[gladiator2];
                    } else {
                        delete gladiatorPool[gladiator1];
                        delete totalSkill[gladiator1];
                    }
                }
            }
        }
        command = input.shift();
    }

    let totalSkillEntries = Object.entries(totalSkill).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    

    for (let entry of totalSkillEntries) {
        console.log(`${entry[0]}: ${entry[1]} skill`);
        let sortedTechniquesEntries = Object.entries(gladiatorPool[entry[0]]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let innerEntry of sortedTechniquesEntries) {
            console.log(`- ${innerEntry[0]} <!> ${innerEntry[1]}`);
        }
    }

}
// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ])

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ])