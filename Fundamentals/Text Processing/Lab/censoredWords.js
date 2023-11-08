function censorWord(text, word) {
    let censoredWord = text.replace(word, '*'.repeat(word.length));
    while (censoredWord.includes(word)) {
        censoredWord = censoredWord.replace(word, '*'.repeat(word.length));
    }
    console.log(censoredWord);
}
censorWord('A small sentence small some words', 'small')