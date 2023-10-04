function sumOfOddNumbers(n) {
    let counter = 1;
    let a = 1;
    let sum = 0;
    while (counter <= n) {
        console.log(a);
        sum += a;
        a += 2;
        counter++;
    }
    console.log("Sum: " + sum);
}
sumOfOddNumbers(3)