function bills(input) {
    let months = Number(input[0]);
    let waterBill = 20;
    let internetBill = 15;

    let electricBill = 0;
    let other = 0;

    for (let i = 1; i <= months; i++) {
        electricBill += Number(input[i]);
        other = other + (Number(input[i]) + 20 + 15) * 1.20;
    }

    console.log(`Electricity: ${(electricBill).toFixed(2)} lv`);
    console.log(`Water: ${(waterBill * months).toFixed(2)} lv`);
    console.log(`Internet: ${(internetBill * months).toFixed(2)} lv`);
    console.log(`Other: ${(other).toFixed(2)} lv`);
    console.log(`Average: ${((electricBill / months + waterBill + internetBill + other / months)).toFixed(2)} lv`);
}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])