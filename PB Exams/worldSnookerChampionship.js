function worldSnookerChampionship(input) {
    let stage = input[0];
    let ticketType = input[1];
    let numberOfTickets = Number(input[2]);
    let photo = input[3];
    let singleTicket = 0;
    let moneyForPhoto = 0;

    if (stage === "Quarter final") {
        switch (ticketType) {
            case "Standard": singleTicket = 55.50; break;
            case "Premium": singleTicket = 105.20; break;
            case "VIP": singleTicket = 118.90; break;
        }
    } else if (stage === "Semi final") {
        switch (ticketType) {
            case "Standard": singleTicket = 75.88; break;
            case "Premium": singleTicket = 125.22; break;
            case "VIP": singleTicket = 300.40; break;
        }
    } else {
        switch (ticketType) {
            case "Standard": singleTicket = 110.10; break;
            case "Premium": singleTicket = 160.66; break;
            case "VIP": singleTicket = 400; break;
        }
    }
    let price = singleTicket * numberOfTickets;
    if (price <= 4000 && photo === "Y") {
        moneyForPhoto = numberOfTickets * 40;
    }
    if (price > 4000) {
        price *= 0.75;
    } else if (price > 2500) {
        price *= 0.90;
    }
    price += moneyForPhoto;
    console.log(price.toFixed(2));
}
worldSnookerChampionship(["Quarter final",
    "Standard",
    "11",
    "N"])