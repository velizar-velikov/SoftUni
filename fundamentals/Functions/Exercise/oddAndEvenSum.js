let oddAndEvenSum = (num) => {
    let str = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < str.length; i++) {
        let currentNum = Number(str[i]);
        currentNum % 2 == 0 ? evenSum += currentNum : oddSum += currentNum;
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}
console.log(oddAndEvenSum(3495892137259234))