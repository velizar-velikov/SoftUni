function walking(input) {
    let index = 0;
    let command = input[index];

    let currentSteps = 0;
    let sum = 0;

    while (command !== "Going home") {
        currentSteps = Number(command);
        sum += currentSteps;
        if (sum >= 10000){
            break;
        }
        index++;
        command = input[index];

    }
    if (command === "Going home") {
        index++;
        currentSteps = Number(input[index]);
        sum += currentSteps;
    }
    if (sum >= 10000) {
        let stepOver = sum - 10000;
        console.log(`Goal reached! Good job!`);
        console.log(`${stepOver} steps over the goal!`);
    }else{
        console.log(`${10000 - sum} more steps to reach goal.`);
    }
}
walking(["1500",
"3000",
"250",
"1548",
"2000"])
