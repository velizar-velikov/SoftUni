function coins(input){
    let change = Number(input[0]);

    let inCoins = Math.floor(change * 100);
    let coinCounter = 0;

    while (inCoins > 0){
        if (inCoins >= 200){
            inCoins -= 200;
            coinCounter++;
        }else if(inCoins >= 100){
            inCoins -= 100;
            coinCounter++;
        }else if(inCoins >= 50){
            inCoins -= 50;
            coinCounter++;
        }else if(inCoins >= 20){
            inCoins -= 20;
            coinCounter++;
        }else if(inCoins >= 10){
            inCoins -= 10;
            coinCounter++;
        }else if(inCoins >= 5){
            inCoins -= 5;
            coinCounter++;
        }else if(inCoins >= 2){
            inCoins -= 2;
            coinCounter++;
        }else if(inCoins >= 1){
            inCoins -= 1;
            coinCounter++;
        }
    }
    console.log(coinCounter);
}
coins(["1.23"])