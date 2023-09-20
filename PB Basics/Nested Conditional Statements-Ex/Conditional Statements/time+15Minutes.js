function time(input){
    let currentHour = Number(input[0]);
    let currentMin = Number(input[1]);
    let currentFullmin = currentHour * 60 + currentMin;
    let fullMinAfter = currentFullmin + 15;

    let hourAfter = Math.floor(fullMinAfter / 60);
    let minAfter = fullMinAfter % 60;

    if(hourAfter >= 24){
        hourAfter = hourAfter - 24;
    }
    if(minAfter < 10){
        console.log(`${hourAfter}:0${minAfter}`);
    }else{
    console.log(`${hourAfter}:${minAfter}`)
    }
}
time(["24", "08"])
