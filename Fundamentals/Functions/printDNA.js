function printDNA(num) {
    let variants = ['**XX**', '*X--X*', 'X----X', '*X--X*'];
    let letters = 'ATCGTTAGGG';

    let index = 0;
    let secondIndex = 0;
    for (let i = 0; i < num; i++) {
        if (index > variants.length - 1) {
            index = 0;
        }
        if (secondIndex > letters.length - 1) {
            secondIndex = 0;
        }
        let dna = variants[index];
        while (dna.includes('X')) {
            dna = dna.replace('X', letters[secondIndex]);
            secondIndex++;
        }
        console.log(dna);
        index++;
    }
}
printDNA(4)