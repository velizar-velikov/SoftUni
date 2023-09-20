function vegetableMarket(input){
    let vegetablePrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let vegetableWeight = Number(input[2]);
    let fruitWeight = Number(input[3]);

    let priceInEuro = (vegetableWeight * vegetablePrice + fruitWeight * fruitPrice) / 1.94;

    console.log(priceInEuro.toFixed(2))
}
vegetableMarket(["0.194", "19.4", "10", "10"])