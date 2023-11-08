function replaceRepeteatingChars(str) {
    let uniqueStr = '';

    for (let char of str) {
        if (char != uniqueStr[uniqueStr.length - 1]) {
            uniqueStr += char;
        }
    }
    console.log(uniqueStr);
}
replaceRepeteatingChars('aaaaabbbbbcdddeeeedssaa')

replaceRepeteatingChars('qqqwerqwecccwd')