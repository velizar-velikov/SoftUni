function triplesOfLatinLetters(num) {
    let triples = '';
    for (let i = 0; i < num; i++) {
        let letterOne = String.fromCharCode(97 + i);
        triples += letterOne;
        for (let j = 0; j < num; j++) {
            let letterTwo = String.fromCharCode(97 + j);
            triples += letterTwo;
            for (let k = 0; k < num; k++) {
                let letterThree = String.fromCharCode(97 + k);
                triples += letterThree;
                console.log(triples);
                triples = letterOne + letterTwo;
            }
            triples = letterOne;
        }
        triples = '';
    }
}
// triplesOfLatinLetters(3)
triplesOfLatinLetters(2)