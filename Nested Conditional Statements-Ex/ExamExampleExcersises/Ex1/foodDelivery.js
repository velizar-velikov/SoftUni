function foodDelivery(input){
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veggetarianMenu = Number(input[2]);

    let menuPrice = chickenMenu * 10.35 + fishMenu * 12.40 + veggetarianMenu * 8.15;
    let dessert = menuPrice * 0.20;
    let deliveryPrice = 2.50;
    let price = menuPrice  + dessert + deliveryPrice;

    console.log(price);
}
foodDelivery(["2 ","4 ","3 "])