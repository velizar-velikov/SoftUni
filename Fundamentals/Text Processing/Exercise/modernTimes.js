function modernTimes(input) {
    let words = input.split(' ');
    let specialWords = [];
    let regex = /^[a-zA-Z]+$/;

    for (let item of words) {
        if (item.includes('#')) {
            let word = item.substring(item.indexOf('#') + 1, item.length);
            if (regex.test(word)) {
                specialWords.push(word);
            }
        }
    }
    specialWords.forEach(word => console.log(word))
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')