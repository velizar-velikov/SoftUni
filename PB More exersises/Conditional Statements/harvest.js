function harvest(input){
    let vineyardArea = Number(input[0]);
    let grapesPerSqMeter = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);

    let grapes = vineyardArea * grapesPerSqMeter;
    let wineMade = 0.40 * grapes / 2.5;

    if(wineMade < wineNeeded){
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded - wineMade)} liters wine needed.`);
    }else{
        let winePerPerson = (wineMade - wineNeeded) / workers;
        console.log(`Good harvest this year! Total wine: ${wineMade} liters.`);
        console.log(`${Math.ceil(wineMade - wineNeeded)} liters left -> ${Math.ceil(winePerPerson)} liters per person.`);
    }

}
harvest(["650", "2", "175", "3"])