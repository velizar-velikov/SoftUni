function burgerBus(input) {
    let cities = Number(input.shift());

    let cityCounter = 0;
    let totalProfit = 0;
    for (let i = 0; i < cities; i++) {
        let city = input.shift();
        cityCounter++;
        let earnings = Number(input.shift());
        let expenses = Number(input.shift());

        if (cityCounter % 5 == 0) {
            earnings *= 0.90;
        } else if (cityCounter % 3 == 0) {
            expenses *= 1.50;
        }
        let profit = earnings - expenses;
        console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
        totalProfit += profit;
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

// burgerBus(["3",
//     "Sofia",
//     "895.67",
//     "213.50",
//     "Plovdiv",
//     "2563.20",
//     "890.26",
//     "Burgas",
//     "2360.55",
//     "600.00"])

burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])
