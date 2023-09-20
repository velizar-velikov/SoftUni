function backToThePast(input) {
    let inheritance = Number(input[0]);
    let finalYear = Number(input[1]);

    let age = 0
    let moneySpent = 0;

    for (let i = 1800; i <= finalYear; i++) {
        age = 18 + i - 1800;
        if (i % 2 === 0) {
            moneySpent = moneySpent + 12000;
        } else {
            moneySpent = moneySpent + (12000 + 50 * age);
        }
    }
    if (inheritance >= moneySpent) {
        console.log(`Yes! He will live a carefree life and will have ${(inheritance - moneySpent).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(moneySpent - inheritance).toFixed(2)} dollars to survive.`);
    }
}
backToThePast(["50000", "1802"])