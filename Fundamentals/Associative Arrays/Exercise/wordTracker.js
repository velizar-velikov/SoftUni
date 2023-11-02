function wordTracker(input) {
    let wordsToFind = input.shift().split(' ');
    let words = {};

    wordsToFind.forEach(word => words[word] = 0);
    
    for (let word of input) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    }

    let sortedWords = Object.fromEntries((Object.entries(words).sort(([wordOne, countOne], [wordTwo, countTwo]) => countTwo - countOne)));
    Object.entries(sortedWords).forEach(([word, count]) => console.log(`${word} - ${count}`));
}

wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])
