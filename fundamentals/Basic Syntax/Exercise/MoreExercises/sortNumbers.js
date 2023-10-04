function sortNumbers(num1, num2, num3) {
    let arr = [num1, num2, num3].sort((a, b) => (b - a));

    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
}
sortNumbers(2, 1, 3)