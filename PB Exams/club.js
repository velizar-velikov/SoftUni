function club(input){
    let wantedEarnings = Number(input[0]);
    let index = 1;
    let command = input[index];
    let earnings = 0;
    
    while (command !== "Party!"){
        let pricePer = Number(command.length);
        index++;
        command = input[index];
        let count = Number(command);
        let currentCocktail = pricePer * count;

        if (currentCocktail % 2 === 1){
            currentCocktail *= 0.75;
        }
        earnings += currentCocktail;

        if (earnings >= wantedEarnings){
            console.log("Target acquired.");
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "Party!"){
        console.log(`We need ${(wantedEarnings - earnings).toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${earnings.toFixed(2)} leva.`);
}
club(["500", "Bellini", "6", "Bamboo", "Party!"])