function bitcoin(arr) {
    let singleBitcoin = 11949.16;
    let gramOfGold = 67.51;
    let moneyInPocket = 0;

    let dayCounter = 0;
    let firstBTC = false;
    let firstBitcoinDay = 0;
    let btcCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        dayCounter++;
        let moneyToday = arr[i] * gramOfGold;
        if (dayCounter % 3 == 0) {
            moneyToday *= 0.70;
        }
        moneyInPocket += moneyToday;
        while (moneyInPocket >= singleBitcoin) {
            if (!firstBTC) {
                firstBTC = true;
                firstBitcoinDay = dayCounter;
            }
            btcCounter++;
            moneyInPocket -= singleBitcoin;
        }
    }
    console.log(`Bought bitcoins: ${btcCounter}`);
    if (btcCounter > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${moneyInPocket.toFixed(2)} lv.`);
}
bitcoin([100, 200, 300])