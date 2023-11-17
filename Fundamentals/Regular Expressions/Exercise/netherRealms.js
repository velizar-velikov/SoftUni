function netherRealms(data) {
    let splittingPattern = /[, ]+/g;
    let demonNames = data.trim().split(splittingPattern);

    let demons = {};

    for (let demonName of demonNames) {
        let patternHealth = /[^\+\*\/\d.\-]/g;
        let patternNums = /(?<sign>[\+\-])?(?<digit>\d+\.?\d*)/g;
        let health = demonName.match(patternHealth).reduce((acc, char) => acc + char.charCodeAt(), 0);
        let matches = [...demonName.matchAll(patternNums)];

        let damage = 0;

        matches.forEach(match => {
            let { sign, digit } = match.groups;
            if (sign === undefined || sign === '+') {
                damage += Number(digit);
            } else {
                damage -= Number(digit);
            }
        });

        let alteringPatter = /[\*\/]+/g;
        let alteringSigns = demonName.match(alteringPatter);
        if (alteringSigns !== null) {
            alteringSigns = alteringSigns.join('').split('');

            alteringSigns.forEach(sign => {
                if (sign === '*') {
                    damage *= 2;
                } else if (sign === '/') {
                    damage /= 2;
                }
            });
        }
        demons[demonName] = {};
        demons[demonName]['health'] = health;
        demons[demonName]['damage'] = damage;
    }

    let sortedEntries = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));

    sortedEntries.forEach(([name, { health, damage }]) => console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`))
}
// netherRealms('M3ph-0.5s-0.5t0.**')
netherRealms('M3ph1st0**,           Azazel')
