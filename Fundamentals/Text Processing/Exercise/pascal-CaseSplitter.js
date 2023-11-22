function pascalCaseSplitter(str) {
    let word = '';
    let words = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char == char.toUpperCase()) {
            if (word.length > 0) {
                words.push(word);
            }
            word = '';
        }
        word += char;
    } if (word.length > 0) {
        words.push(word);

        console.log(words.join(', '));

    }
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')
pascalCaseSplitter('tratratra')
pascalCaseSplitter('WWWWWWW')