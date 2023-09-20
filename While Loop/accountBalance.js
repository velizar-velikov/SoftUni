function accountBalance(input) {
    let index = 0;
    let entry = input[index];
    index++;
    let money = 0;
    let sum = 0;

    while (entry !== "NoMoreMoney") {
        money = Number(entry);
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: " + money.toFixed(2));
        sum += money;
        entry = input[index];
        index++;
    }
    console.log("Total: " + sum.toFixed(2));
}
accountBalance(["120",
    "45.55",
    "-150"])