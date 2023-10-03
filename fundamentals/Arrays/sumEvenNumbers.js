function sumEvenNumbers(arrOfString) {
    let sum = 0;
    for (let i = 0; i < arrOfString.length; i++) {
        arrOfString[i] = Number(arrOfString[i]);
        if (arrOfString[i] % 2 == 0) {
            sum += arrOfString[i];
        }
    }
    console.log(sum);
}
sumEvenNumbers(['2', '4', '6', '8', '10'])