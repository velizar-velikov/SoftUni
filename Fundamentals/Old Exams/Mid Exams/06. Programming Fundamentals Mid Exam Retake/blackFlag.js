function blackFlag(input) {
    input = input.map(Number);
    let daysOfPlunder = input.shift();
    let plunderForDay = input.shift();
    let targetPlunder = input.shift();

    let totalPlunder = 0;
    for (let i = 1; i <= daysOfPlunder; i++) {
        totalPlunder += plunderForDay;
        if (i % 3 == 0) {
            totalPlunder += 0.50 * plunderForDay;
        }
        if (i % 5 == 0) {
            totalPlunder *= 0.70;
        }
    }

    if (totalPlunder >= targetPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder / targetPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["2",
    "15",
    "15"])