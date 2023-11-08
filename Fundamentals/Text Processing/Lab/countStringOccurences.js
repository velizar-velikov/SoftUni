function countStringOccurences(sentence, wordSearch) {
    let wordArray = sentence.split(' ');
    let count = 0;
    for (let word of wordArray) {
        if (word === wordSearch) {
            count++;
        }
    }
    console.log(count);
}
countStringOccurences('This is a word and it also is a sentence',
    'is')