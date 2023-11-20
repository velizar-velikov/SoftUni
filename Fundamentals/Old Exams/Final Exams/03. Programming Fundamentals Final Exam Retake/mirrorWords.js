function mirrorWords([input]) {
    let pattern = /(?<surround>[@#])(?<word1>[A-Za-z]{3,})\k<surround>\k<surround>(?<word2>[A-Za-z]{3,})\k<surround>/g;
    let matches = [...input.matchAll(pattern)];

    let validPairs = matches.length;
    if (validPairs == 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${validPairs} word pairs found!`);
    }

    let mirrorWords = [];

    let mirrorWordsBool = false;

    matches.forEach(match => {
        let word1 = match.groups.word1;
        let word2 = match.groups.word2;
        let reversedWord2 = word2.split('').reverse().join('');
        if (word1 === reversedWord2) {
            mirrorWords.push([word1, word2]);
            mirrorWordsBool = true;
        }
    });

    if (!mirrorWordsBool) {
        console.log('No mirror words!');
        return;
    }

    let output = [];
    mirrorWords.forEach(mirrorWordsPair => {
        let concatPair = mirrorWordsPair.join(' <=> ');
        output.push(concatPair);
    });
    console.log('The mirror words are:');
    console.log(output.join(', '));
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])

// mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])

// mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])