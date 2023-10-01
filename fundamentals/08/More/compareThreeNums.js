function biggestOfThreeNumbers(num1, num2, num3) {
    const arr = [];
    arr.push(num1, num2, num3);
    console.log(Math.max(...arr));
}
biggestOfThreeNumbers(1, 2, 3)