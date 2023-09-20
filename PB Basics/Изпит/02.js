function solve(input) {
    let pocketMoneyPerDay = Number(input[0]);
    let moneyFromSellsPerDay = Number(input[1]);
    let expensesForWholeDuration = Number(input[2]);
    let giftPrice = Number(input[3]);

    let moneyLeft = (moneyFromSellsPerDay * 5) + (pocketMoneyPerDay * 5) - expensesForWholeDuration;
    if (moneyLeft >= giftPrice) {
        console.log(`Profit: ${moneyLeft.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(giftPrice - moneyLeft).toFixed(2)} BGN.`);
    }

}
solve(["15.20",
    "200.00",
    "7.30",
    "1500.12"])