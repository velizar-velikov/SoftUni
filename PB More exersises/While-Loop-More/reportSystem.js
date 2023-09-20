function reportSystem(input) {
    let expectedMoney = Number(input[0]);

    let index = 1;
    let command = input[index];

    let sum = 0;
    let cashSum = 0;
    let cardSum = 0;
    let cashPaymentsCounter = 0;
    let cardPaymentsCounter = 0;
    let currentPrice = 0;

    while (command !== "End") {
        index++;
        currentPrice = Number(command);
        let isDeclined = false;

        if (currentPrice > 100) {
            isDeclined = true;
            console.log("Error in transaction!");
        }
        if (isDeclined) {
            sum += currentPrice;
            cashPaymentsCounter++;
            cashSum += currentPrice;
            console.log("Product sold!");
        }
        command = input[index];
        index++;
        currentPrice = Number(command);
        if (currentPrice < 10) {
            isDeclined = true;
            console.log("Error in transaction!");
        }
        if (isDeclined) {
            sum += currentPrice;
            cardPaymentsCounter++;
            cardSum += currentPrice;
            console.log("Product sold!");
        }
        command = input[index];

        if (sum >= expectedMoney) {
            console.log(`Average CS: ${(cashSum / cashPaymentsCounter).toFixed(2)}`);
            console.log(`Average CC: ${(cardSum / cardPaymentsCounter).toFixed(2)}`);
            break;
        }

        if (command === "End") {
            console.log("Failed to collect required money for charity.");
        }
    }
}
reportSystem(["600", "101", "9", "102", "11", "442", "111", "555", "123", "22", "22", "56", "67", "45", "80", "End"])