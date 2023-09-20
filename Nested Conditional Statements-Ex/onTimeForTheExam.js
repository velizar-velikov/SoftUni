function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);

    let timeExam = hourExam * 60 + minExam;
    let timeArrival = hourArrival * 60 + minArrival;
    let diff = timeExam - timeArrival;
    if (diff > 30) {
        console.log("Early");
    } else if (diff >= 0 && diff <= 30) {
        console.log("On time");
    } else {
        console.log("Late");
    }
    let hourDiff = Math.floor(Math.abs(diff) / 60);
    let minDiff = Math.abs(Math.abs(diff) % 60);
    if (diff >= 0 && diff < 60) {
        console.log(`${minDiff} minutes before the start`);
    } else if (diff >= 60) {
        if (minDiff < 10) {
            console.log(`${hourDiff}:0${minDiff} hours before the start`);
        } else {
            console.log(`${hourDiff}:${minDiff} hours before the start`);
        }
    } else if (diff > -60 && diff < 0) {
        console.log(`${minDiff} minutes after the start`);
    } else {
        if (minDiff < 10) {
            console.log(`${hourDiff}:0${minDiff} hours after the start`);
        } else {
            console.log(`${hourDiff}:${minDiff} hours after the start`);
        }
    }
}
onTimeForTheExam(["9",
    "30",
    "11",
    "00"])