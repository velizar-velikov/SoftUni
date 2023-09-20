function averageNumber(input){
    let n = Number(input[0]);

    let sum = 0;
    let currentNumber = 0;

    for (let i = 1; i <= n; i++){
        currentNumber = Number(input[i]);
        sum += currentNumber;
    }
    console.log((sum / n).toFixed(2));
}
averageNumber(["4", "3", "2", "4", "2"])