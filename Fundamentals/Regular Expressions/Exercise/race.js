function solveRace(input) {
    let participants = input.shift().split(', ');

    let info = input.shift();
    let alphaNumericPattern = /\w/g;
    let lettersPattern = /[A-Za-z]/g;
    let numsPattern = /\d/g;

    let participantsObj = {};

    while (info !== 'end of race') {
        let alphaNumMatch = info.match(alphaNumericPattern).join('');
        let name = alphaNumMatch.match(lettersPattern).join('');
        let nums = alphaNumMatch.match(numsPattern);
        let distance = nums.reduce((sum, num) => sum + Number(num), 0);

        if (participants.includes(name)) {
            if (participantsObj.hasOwnProperty(name)) {
                participantsObj[name] += distance;
            } else {
                participantsObj[name] = distance;
            }
        }
        info = input.shift();
    }

    let top3ParticipantsEntries = Object.entries(participantsObj).sort((a, b) => b[1] - a[1]).slice(0, 3);

    console.log(`1st place: ${top3ParticipantsEntries[0][0]}`);
    console.log(`2nd place: ${top3ParticipantsEntries[1][0]}`);
    console.log(`3rd place: ${top3ParticipantsEntries[2][0]}`);
}
solveRace(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])

solveRace(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'])