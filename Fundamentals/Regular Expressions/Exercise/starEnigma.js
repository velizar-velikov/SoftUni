function starEnigma(input) {

    let n = Number(input.shift());
    let decriptedArr = [];

    let index = 0;
    let command = input[index];
    while (index < input.length) {
        let pattern = /[star]/gi;
        let specialLetterCounter = command.match(pattern).length;
        let decriptedStr = command.split('').map(letter => {
            let newLetter = String.fromCharCode(letter.charCodeAt() - specialLetterCounter);
            return newLetter;
        }).join('');
        decriptedArr.push(decriptedStr);

        index++;
        command = input[index];
    }

    let pattern = /@(?<planet>[A-Za-z]+)[^-@!:>]*:(?<population>\d+)[^-@!:>]*!(?<attackType>[AD])![^-@!:>]*->(?<soldierCount>\d+)/g;
    let matches = [...(decriptedArr.join('')).matchAll(pattern)];

    let attacksCount = {
        'Attacked': [],
        'Destroyed': []
    };

    matches.forEach(match => {
        let { attackType, planet } = match.groups;
        if (attackType === 'A') {
            attacksCount['Attacked'].push(planet);
        } else if (attackType === 'D') {
            attacksCount['Destroyed'].push(planet);
        }
    });

    for (let [attackType, planets] of Object.entries(attacksCount)) {
        console.log(`${attackType} planets: ${attacksCount[attackType].length}`);
        planets.sort().forEach(planet => console.log(`-> ${planet}`));
    }
}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'])

starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR'])