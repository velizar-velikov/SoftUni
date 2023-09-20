function sumSeconds(input){
    let competitorOneTime = Number(input[0]);
    let competitorTwoTime = Number(input[1]);
    let competitorThreeTime = Number(input[2]);

    let totalTimeSec = competitorOneTime + competitorTwoTime + competitorThreeTime;
    let minTime = Math.floor(totalTimeSec / 60);
    let sec = totalTimeSec % 60;

    if(sec < 10){
        console.log(`${minTime}:0${sec}`);
    }else{
        console.log(`${minTime}:${sec}`); 
    }

}
sumSeconds(["50",
"50",
"49"])

