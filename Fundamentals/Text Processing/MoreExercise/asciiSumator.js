function asciiSumator([firstChar, secondChar, str]) {

    let firstAscii = firstChar.charCodeAt(0);
    let secondAscii = secondChar.charCodeAt(0);

    if (firstAscii > secondAscii) {
        [firstAscii, secondAscii] = [secondAscii, firstAscii];
    }

    let sum = str.split('')
        .filter(char => char.charCodeAt(0) > firstAscii && char.charCodeAt(0) < secondAscii)
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    console.log(sum);
}
asciiSumator(['.', '@', 'dsg12gr5653feee5'])
asciiSumator(['?', 'E', '@ABCEF'])
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$'])