function flowerShop(input){
    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cacti = Number(input[3]);
    let giftPrice = Number(input[4]);

    let magnoliasMoney = magnolias * 3.25;
    let hyacinthsMoney = hyacinths * 4;
    let rosesMoney = roses * 3.50;
    let cactiMoney = cacti * 8;

    let earnings = 0.95 * (magnoliasMoney + hyacinthsMoney + rosesMoney + cactiMoney);

    if(earnings >= giftPrice){
        console.log(`She is left with ${Math.floor(earnings - giftPrice)} leva.`);
    }else{
        console.log(`She will have to borrow ${Math.ceil(giftPrice - earnings)} leva.`);
    }
}
flowerShop(["2", "3", "5", "1", "50"])