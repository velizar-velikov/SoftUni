function lunchBreak(input){
    let seriesName = input[0];
    let epDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = 1 / 8 * breakDuration;
    let relaxTime = 1 / 4 * breakDuration;
    let timeLeft = breakDuration - lunchTime - relaxTime;

    if(timeLeft >= epDuration){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - epDuration)} minutes free time.`);
    } else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(epDuration - timeLeft)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])
