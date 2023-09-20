function pets(input){
    let days = Number(input[0]);
    let food = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4]);

    let dogFood = dogFoodPerDay * days;
    let catFood = catFoodPerDay * days;
    let turtleFood = turtleFoodPerDay * days / 1000;
    let foodNeeded = dogFood + catFood + turtleFood;

    if(food >= foodNeeded){
        console.log(`${Math.floor(food - foodNeeded)} kilos of food left.`);
    }else{
        console.log(`${Math.ceil(foodNeeded - food)} more kilos of food are needed.`);
    }
}
pets(["2", "10", "1", "1", "1200"])