function toyShop(input){
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let toysNumber = puzzles + dolls + bears + minions + trucks;
    
    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let bearPrice = bears * 4.10;
    let minionsPrice = minions * 8.20;
    let truckPrice = trucks * 2;

    let fullPrice = puzzlesPrice + dollsPrice + bearPrice + minionsPrice + truckPrice;

    if(toysNumber >= 50) {
        fullPrice *= 0.75;
    }
    let earnings = 0.90 * fullPrice;


    if((earnings - tripPrice) >= 0){
        console.log(`Yes! ${(earnings - tripPrice).toFixed(2)} lv left.`);
    } else{
        console.log(`Not enough money! ${(tripPrice - earnings).toFixed(2)} lv needed.`);
    }
    }
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])
