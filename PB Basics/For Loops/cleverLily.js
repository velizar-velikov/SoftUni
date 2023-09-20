function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toys = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let evenBirthdays = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            evenBirthdays++;
            savedMoney = savedMoney + (10 * evenBirthdays);
            stolenMoney++;
        } else {
            toys++;
        }
    }
    let totalMoney = savedMoney - stolenMoney + toys * singleToyPrice;

    if (totalMoney >= washingMachine) {
        console.log(`Yes! ${(totalMoney - washingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachine - totalMoney).toFixed(2)}`);
    }
    console.log();
}
cleverLily(["10",
    "170.00",
    "6"])