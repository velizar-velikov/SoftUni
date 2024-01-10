function sameNumber(num) {
    const res = num.toString()
        .split('')
        .every(digit => digit == num.toString()[0]);
    const sum = num.toString()
        .split('')
        .reduce((acc, num) => acc + Number(num), 0);
    console.log(res);
    console.log(sum);
}

sameNumber(1234);