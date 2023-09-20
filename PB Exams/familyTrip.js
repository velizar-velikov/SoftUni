function familyTrip(input) {
    let budget = Number(input[0]);
    let night = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let procentAdditionalExpenses = Number(input[3]);

    if (night > 7) {
        night *= 0.95;
    }
    let total = night * pricePerNight;
    let additonal = procentAdditionalExpenses * budget / 100;
    budget -= additonal;

    if (budget >= total) {
        console.log(`Ivanovi will be left with ${(budget - total).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(total - budget).toFixed(2)} leva needed.`);
    }
}
familyTrip(["800.50", "8", "100", "2"])