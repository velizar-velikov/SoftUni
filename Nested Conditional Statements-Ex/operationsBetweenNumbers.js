function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let op = input[2];

    let result = 0;
    let oddOrEven = "";

    if (op === "+" || op === "-" || op === "*") {
        switch (op) {
            case "+": result = n1 + n2; break;
            case "-": result = n1 - n2; break;
            case "*": result = n1 * n2; break;
        }
        if (result % 2 == 0) {
            oddOrEven = "even";
        } else {
            oddOrEven = "odd";
        }
        console.log(`${n1} ${op} ${n2} = ${result} - ${oddOrEven}`);
    } else if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (op === "/") {
        result = n1 / n2;
        console.log(`${n1} ${op} ${n2} = ${result.toFixed(2)}`);
    } else if (op === "%") {
        result = n1 % n2;
        console.log(`${n1} ${op} ${n2} = ${result}`);
    }
}
operationsBetweenNumbers(["10",
    "12",
    "+"])