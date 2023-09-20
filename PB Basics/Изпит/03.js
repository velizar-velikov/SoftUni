function solve(input) {
    let dancers = Number(input[0]);
    let score = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let priceAward = 0;

    switch (place) {
        case "Bulgaria": priceAward = score * dancers; break;
        case "Abroad": priceAward = (score * dancers) * 1.50; break;
    }
    let expenses = 0;

    if (place === "Bulgaria") {
        switch (season) {
            case "summer": expenses = priceAward * 0.05; break;
            case "winter": expenses = priceAward * 0.08; break;
        }
    } else if (place === "Abroad") {
        switch (season) {
            case "summer": expenses = priceAward * 0.10; break;
            case "winter": expenses = priceAward * 0.15; break;
        }
    }
    priceAward -= expenses;
    let donation = priceAward * 0.75;
    priceAward -= donation;
    let moneyPerDancer = priceAward / dancers;

    console.log(`Charity - ${donation.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);

}
solve(["25",
    "98",
    "winter",
    "Bulgaria"])