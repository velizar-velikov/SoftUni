function fancyBArocdes(input) {
    let pattern = /@#{1,}(?<barcode>[A-Z][A-Za-z0-9]+[A-Z])@#{1,}/g;

    let barcodeCount = Number(input.shift());

    while (input.length > 0) {
        let command = input.shift();
        let match = [...command.matchAll(pattern)];
        if (match.length == 0 || match[0].groups.barcode.length < 6) {
            console.log('Invalid barcode');
        } else {
            let digitMatch = [...(match[0].groups.barcode.matchAll(/\d/g))];
            if (digitMatch.length == 0) {
                console.log('Product group: 00');
            } else {
                console.log(`Product group: ${digitMatch.join('')}`);
            }
        }
    }
}

fancyBArocdes(["3",
"@#FresH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])

// fancyBArocdes(["6",
// "@###Val1d1teM@###",
// "@#ValidIteM@#",
// "##InvaliDiteM##",
// "@InvalidIteM@",
// "@#Invalid_IteM@#",
// "@#ValiditeM@#"])