function serilizeString([str]) {
    let uniqueChars = new Set(str);
    let uniqueCharsIndexes = {};

    uniqueChars.forEach(char => uniqueCharsIndexes[char] = []);

    for (let i = 0; i < str.length; i++) {
        uniqueCharsIndexes[str[i]].push(i);
    }
    Object.entries(uniqueCharsIndexes)
        .forEach(([char, indexes]) => console.log(`${char}:${indexes.join('/')}`));
}

// serilizeString(["abababa"])

serilizeString(["avjavamsdmcalsdm"])