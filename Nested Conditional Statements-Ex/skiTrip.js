function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let review = input[2];

    let nights = days - 1;
    let price = 0;

    if (type === "room for one person") {
        price = 18;
    } else if (type === "apartment") {
        price = 25;
        if (days < 10) {
            price = 0.70;
        } else if (days <= 15) {
            price = 0.65 * price;
        } else {
            price = 0.50 * price;
        }
    } else if (type === "president apartment") {
        price = 35;
        if (days < 10) {
            price = 0.90 * price;
        } else if (days <= 15) {
            price = 0.85 * price;
        } else {
            price = 0.80 * price;
        }
    }
    switch (review) {
        case "positive": price = 1.25 * price; break;
        case "negative": price = 0.90 * price; break;
    }
    let finalPrice = price * nights;
    console.log(finalPrice.toFixed(2));
}
skiTrip(["30",
    "president apartment",
    "negative"])