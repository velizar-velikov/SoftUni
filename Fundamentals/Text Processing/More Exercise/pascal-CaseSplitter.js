function pascalCaseSplitter(str) {
    let word = '';
    let words = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char == char.toUpperCase()) {
            if (word.length > 0 && word !== word.toLowerCase()) {
                words.push(word);
            }
            word = char;
        } else if (i == str.length - 1) {
            word += char;
            if (word !== word.toLowerCase() && word !== word.toUpperCase()) {
                words.push(word);
            }
        } else {
            word += char;
        }
    }

    if (words.length > 0) {
        console.log(words.join(', '));
    }
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')
pascalCaseSplitter('tratratra')
pascalCaseSplitter('WWWWWWW')