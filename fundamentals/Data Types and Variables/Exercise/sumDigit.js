function sumDigit(num) {
    let numToString = String(num);

    let sum = 0;
    for (let i = 0; i < numToString.length; i++) {
        let toAdd = numToString[i];
        toAdd = Number(toAdd);
        sum += toAdd;
    }
    console.log(sum);
}
sumDigit(245678)
// sumDigit()