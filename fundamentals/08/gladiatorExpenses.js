function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let timesOfBrokenHelmet = parseInt(lostFights / 2);
    let timesOfBrokenSword = parseInt(lostFights / 3);
    let timesOfBrokenShield = parseInt(lostFights / 6);
    let timesOfBrokenArmor = parseInt(timesOfBrokenShield / 2);

    let expenses = timesOfBrokenHelmet * helmetPrice + timesOfBrokenSword * swordPrice + timesOfBrokenShield * shieldPrice + timesOfBrokenArmor * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)