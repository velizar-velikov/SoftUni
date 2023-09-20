function trasportPrice(input){
    let distance = Number(input[0]);
    let dayOrNight = input[1];

    if(distance < 20 && dayOrNight == "day"){
        let taxiPrice = 0.70 + distance * 0.79;
        console.log(taxiPrice.toFixed(2));
    }else if(distance < 20 && dayOrNight == "night"){
        let taxiPrice = 0.70 + distance * 0.90;
        console.log(taxiPrice.toFixed(2));
    }else if(distance < 100){
        let busPrice = distance * 0.09;
        console.log(busPrice.toFixed(2));
    }else{
        let trainPrice = distance * 0.06;
        console.log(trainPrice.toFixed(2));
    }
}
trasportPrice(["7", "night"])