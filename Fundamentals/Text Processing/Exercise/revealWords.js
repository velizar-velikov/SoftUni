function revealWords(wordsStr, text) {
    let words = wordsStr.split(', ');
    for (let word of words) {
        if (text.includes('*'.repeat(word.length))) {
            text = text.replace('*'.repeat(word.length), word);
        }
    }
    console.log(text);
}
// revealWords('great',
// 'softuni is ***** place for learning new programming languages')

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')