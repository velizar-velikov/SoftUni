function sumNumbers(input){
    let index = 0;
    let num = Number(input[index]);
    index++;
    let newNum = 0;

    let sum = 0;

    while (sum < num){
    newNum = Number(input[index]);
    sum += newNum;
    index++;
    }
    console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])