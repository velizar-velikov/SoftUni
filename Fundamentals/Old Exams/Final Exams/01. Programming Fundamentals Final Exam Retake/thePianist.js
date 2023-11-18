function thePianist(input) {

    let n = Number(input.shift());
    let pianoPieces = {};

    
    let index = 0;
    let command = input[index];
    index++;
    while (index <= n) {
        let [piece, composer, key] = command.split('|');
        pianoPieces[piece] = {};
        pianoPieces[piece]['composer'] = composer;
        pianoPieces[piece]['key'] = key;
        command = input[index];
        index++;
    }
    
    while (command !== 'Stop') {
        let tokens = command.split('|');
        let action = tokens.shift();
        let piece = tokens.shift();

        if (action === 'Add') {
            let composer = tokens[0];
            let key = tokens[1];

            if (piece in pianoPieces) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pianoPieces[piece] = {};
                pianoPieces[piece]['composer'] = composer;
                pianoPieces[piece]['key'] = key;
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (action === 'Remove') {

            if (piece in pianoPieces) {
                delete pianoPieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (action === 'ChangeKey') {
            let newKey = tokens[0];

            if (piece in pianoPieces) {
                pianoPieces[piece]['key'] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        command = input[index];
        index++;
    }

    for (let [piece, info] of Object.entries(pianoPieces)) {
        console.log(`${piece} -> Composer: ${pianoPieces[piece]['composer']}, Key: ${pianoPieces[piece]['key']}`);
    }

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])

// thePianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ])