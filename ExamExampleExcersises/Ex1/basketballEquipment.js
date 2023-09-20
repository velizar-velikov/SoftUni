function basketballEquipment(input){
    let annualsubsciptionPrice = Number(input[0]);
    let sneakers = annualsubsciptionPrice - 0.40 * annualsubsciptionPrice;
    let outfit = sneakers - 0.20 * sneakers;
    let ball = 0.25 * outfit;
    let accessories = 0.20 * ball;

    let expenses = annualsubsciptionPrice + sneakers + outfit + ball + accessories;
     console.log(expenses);
    
}
basketballEquipment(["365 "])