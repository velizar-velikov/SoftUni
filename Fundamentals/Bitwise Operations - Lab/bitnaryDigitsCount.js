function binaryDigitCount(n, b) {
    let binary = n.toString(2);
    let digitCount = 0;
    for(let item of binary) {
        if (item == b) {
            digitCount++;
        }
    }
    console.log(digitCount);
}
binaryDigitCount(10, 0)