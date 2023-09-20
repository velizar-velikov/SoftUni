function yardGreening(input){
    let yardArea = Number(input[0]);
    let sqMeterPrice = 7.61;
    let price = yardArea * sqMeterPrice;
    let discount = price * 0.18;
    let product = price - discount;
    
    console.log("The final price is: "+ product +" lv.");
    console.log("The discount is: "+ discount +" lv.");
    }
    yardGreening([25])