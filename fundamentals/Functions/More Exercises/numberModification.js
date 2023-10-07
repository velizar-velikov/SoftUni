function numberModification(num) {
    let sum = 0;
    num = num.toString();
    let arr = [];
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
        arr.push(num[i]);
    }
    if (sum / num.length > 5) {
        console.log(Number(num));
    } else {
        let arrSum = sum;
        while (arrSum / arr.length <= 5) {
            arr.push('9');
            arrSum += 9;
        }
        let numberToPrint = Number(arr.join(''));
        console.log(numberToPrint);
    }
}
numberModification(5835)