function wordsUppercase(str) {
    const pattern = /\W+/
    const words = str.split(pattern)
        .filter(word => word.length > 0)
        .map(word => word.toUpperCase());
    console.log(words.join(', '));
}

wordsUppercase('. Hi, ?how      ! are you?')