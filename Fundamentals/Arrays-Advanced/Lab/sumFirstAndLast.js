function sumFirstAndLast(input) {
    input = input.map(Number);
    let first = input[0];
    let last = input.pop();
    console.log(first + last);
}
sumFirstAndLast(['20', '30', '40'])