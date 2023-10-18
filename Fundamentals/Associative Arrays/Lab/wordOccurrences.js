function findWordOccurrences(input) {
    let wordOccurrence = new Map();
    for (let word of input) {
        if (wordOccurrence.has(word)) {
            let count = wordOccurrence.get(word);
            wordOccurrence.set(word, count + 1);
        } else {
            wordOccurrence.set(word, 1);
        }
    }
    wordOccurrence = new Map(Array.from(wordOccurrence).sort((a, b) => b[1] - a[1]));
    for (let [word, count] of wordOccurrence) {
        console.log(`${word} -> ${count} times`);
    }
}
findWordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])