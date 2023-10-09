function guineaPig(input) {
    let foodG = Number(input[0]) * 1000;
    let hayG = Number(input[1]) * 1000;
    let coverG = Number(input[2]) * 1000;
    let pigWeight = Number(input[3]) * 1000;
    // let outOfProvisions = false;

    for (let i = 1; i <= 30; i++) {
        foodG -= 300;
        if (i % 2 == 0) {
            hayG -= 0.05 * foodG;
        }
        if (i % 3 == 0) {
            coverG -= (1 / 3) * pigWeight;
        }
        if (foodG <= 0 || hayG <= 0 || coverG <= 0) {
            console.log('Merry must go to the pet store!');
            // outOfProvisions = true;
            // return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(foodG / 1000).toFixed(2)}, Hay: ${(hayG / 1000).toFixed(2)}, Cover: ${(coverG / 1000).toFixed(2)}`)
}
guineaPig(["10", 
"5", 
"5.2", 
"1"])
// guineaPig(["1", 
// "1.5", 
// "3", 
// "1.5"])
// guineaPig(["9",
// "5",
// "5.2",
// "1"])