function trainTheTrainers(input) {
    let jury = Number(input[0]);
    let index = 1;
    let command = input[index];
    let sumGrade = 0;
    let gradeCounter = 0;

    while (command !== "Finish") {
        let presentationName = command;
        let presSumGrade = 0;
        index++;
        command = input[index];
        for (let i = 1; i <= jury; i++) {
            let currentGrade = Number(command);
            index++;
            command = input[index];
            gradeCounter++;
            presSumGrade += currentGrade;
        }
        console.log(`${presentationName} - ${(presSumGrade / jury).toFixed(2)}.`);
        sumGrade += presSumGrade;
        command = input[index];
    }
    let avg = sumGrade / gradeCounter;
    console.log(`Student's final assessment is ${avg.toFixed(2)}.`);
}
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])