function solve(num1, num2) {
    const lowerNum = num1 > num2 ? num2 : num1;
    let greatestCommonDevisor = 0;
    for (let i = 1; i <= lowerNum; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            greatestCommonDevisor = i;
        }
    }
    console.log(greatestCommonDevisor);
}

solve(2184, 458)