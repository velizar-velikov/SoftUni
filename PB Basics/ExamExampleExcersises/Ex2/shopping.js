function shopping(input){
    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let gpuPrice = gpu * 250;
    let cpuPrice = 0.35 * gpuPrice * cpu;
    let ramPrice = 0.10 * gpuPrice * ram;
    let finalPrice = gpuPrice + cpuPrice + ramPrice;

    if(gpu > cpu){
        finalPrice *= 0.85;
    } 
    if(budget >= finalPrice){
        console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`);
    } else{
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva more!`);
    }
}
shopping(["900",
"2",
"1",
"3"])