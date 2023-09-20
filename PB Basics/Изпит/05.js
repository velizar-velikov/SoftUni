function solve(input) {
    let metersUp = 5364;
    let index = 0;
    let command = input[0];
    let daysCounter = 1;
    let isUp = false;

    while (command !== "END") {
        let yesOrNo = command;
        if (yesOrNo === "Yes") {
            daysCounter++;
        }
        if (daysCounter > 5) {
            break;
        }
        index++;
        let metersForADay = Number(input[index]);
        metersUp += metersForADay;
        if (metersUp >= 8848) {
            isUp = true;
            console.log(`Goal reached for ${daysCounter} days!`);
            break;
        }
        index++;
        command = input[index];
    }
    if (!isUp) {
        console.log("Failed!");
        console.log(`${metersUp}`);
    }

}
solve(["Yes",
    "535",
    "Yes",
    "849",
    "Yes",
    "499",
    "Yes",
    "400",
    "Yes",
    "500"])
//Yes
//535
//Yes
//849
//Yes
//499
//Yes
//400
//Yes
//500