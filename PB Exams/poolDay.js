function poolDay(input) {
    let people = Number(input[0]);
    let entranceFee = Number(input[1]);
    let sunbedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalEntrance = people * entranceFee;
    let sunbedTotal = Math.ceil(people * 0.75) * sunbedPrice;
    let umbrellaTotal = Math.ceil(people / 2) * umbrellaPrice;
    let total = totalEntrance + sunbedTotal + umbrellaTotal;


    console.log(`${total.toFixed(2)} lv.`);
}
poolDay(["21", "5.50", "4.40", "6.20"])