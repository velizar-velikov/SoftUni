function valueOfString([str, type]) {
    let sumCodes = 0;
    for (let char of str) {
        let charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90 && type === 'UPPERCASE') {
            sumCodes += charCode;
        } else if (charCode >= 97 && charCode <= 122 && type === 'LOWERCASE') {
            sumCodes += charCode;
        }
    }
    console.log(`The total sum is: ${sumCodes}`);
}

valueOfString(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE'])

valueOfString(['AC/DC',
    'UPPERCASE'])