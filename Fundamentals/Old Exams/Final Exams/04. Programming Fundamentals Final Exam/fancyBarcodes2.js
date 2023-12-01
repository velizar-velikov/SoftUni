function fancyBarcodes(input) {
    let pattern = /@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+/g;

    let barcodesCount = Number(input.shift());
    for (let i = 0; i < barcodesCount; i++) {
        let barcode = input[i];
        let validBarcode = barcode.match(pattern);
        if (validBarcode == null) {
            console.log('Invalid barcode');
        } else {
            let digits = validBarcode[0].match(/\d/g);
            let productGroup = '00';
            if (digits != null) {
                productGroup = digits.join('');
            }
            console.log(`Product group: ${productGroup}`);
        }
    }
}

// fancyBarcodes(["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"])

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])