function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let track = input[2];

    let people = juniors + seniors;
    let fund = 0;

    switch (track) {
        case "trail":
            fund = juniors * 5.50 + seniors * 7;
            break;
        case "cross-country":
            fund = juniors * 8 + seniors * 9.50;
            if (people >= 50) {
                fund *= 0.75;
            } break;
        case "downhill":
            fund = juniors * 12.25 + seniors * 13.75;
            break;
        case "road":
            fund = juniors * 20 + seniors * 21.50;
            break;
    }
    fund = 0.95 * fund;
    console.log(fund.toFixed(2));
}
bikeRace(["21", "26", "cross-country"])