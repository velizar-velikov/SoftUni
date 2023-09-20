function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let count = Number(input[2]);

    let money = 0;
    let ticket = 0;

    switch (category) {
        case "VIP": ticket = 499.99; break;
        case "Normal": ticket = 249.99; break;
    }

    let price = count * ticket;

    if (count <= 4) {
        money = 0.25 * budget;
    } else if (count <= 9) {
        money = 0.40 * budget;
    } else if (count <= 24) {
        money = 0.50 * budget;
    } else if (count <= 49) {
        money = 0.60 * budget;
    } else {
        money = 0.75 * budget;
    }
    let diff = Math.abs(money - price);

    if (money >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
matchTickets(["30000", "VIP", "49"])