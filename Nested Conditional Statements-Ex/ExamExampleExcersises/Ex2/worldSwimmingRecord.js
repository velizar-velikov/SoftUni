function worldSwimmingRecord(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let time = distance * timePerMeter;
    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = time + delay;

    if(totalTime >= record){
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    } else{
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}
worldSwimmingRecord(["10464",
"1500",
"20"])