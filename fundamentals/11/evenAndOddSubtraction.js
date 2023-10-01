function evenAndOddSubtraction(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }
    let diff = sumEven - sumOdd;
    console.log(diff);
}
evenAndOddSubtraction([3, 5, 7, 9])