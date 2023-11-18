function rageQuit(input) {

    let str = '';
    let output = '';
    let uniqueSymbols = '';

    for (let char of input) {
        let digitPattern = /\d/;
        if (digitPattern.test(char)) {
            let num = Number(char);
            let repeatedStr = '';
            for (let i = 0; i < num; i++) {
                repeatedStr += str;
            }
            output += repeatedStr;
            str = '';
        } else {
            str += char.toUpperCase();
        }
    }
    let uniqueSymbolsCount = new Set(output.split('')).size;

    console.log(`Unique symbols used: ${uniqueSymbolsCount}`);
    console.log(output);
}
// rageQuit('aSd2&5s@1')
rageQuit('a3')  