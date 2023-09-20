function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let availableMoney = Number(input[1]);

    let index = 2;
    let command = input[index];
    let days = 0;
    let spendingDaysCounter = 0;

    while (true) {
        index++;
        days++;
        if (command === "save") {
            spendingDaysCounter = 0;
            let savedMoney = Number(input[index]);
            availableMoney += savedMoney;

            if (availableMoney >= moneyNeeded) {
                console.log(`You saved the money for ${days} days.`);
                break;
            }
        } else if (command === "spend") {
            spendingDaysCounter++;
            let spentMoney = Number(input[index]);
            availableMoney -= spentMoney;

            if (availableMoney < 0) {
                availableMoney = 0;
            }

            if (spendingDaysCounter === 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }

        }
        index++;
        command = input[index];
    }
}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])