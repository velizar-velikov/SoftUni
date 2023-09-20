function examPreparation(input) {
    let badGrade = Number(input[0]);
    let index = 1;
    let exersiseName = input[index];
    index++;
    let grade = Number(input[index]);
    index++;

    let hasFailed = false;
    let isEnough = false;
    let gradeSum = 0;
    let exersiseCounter = 0;
    let badGradeCounter = 0;


    while (exersiseName !== "Enough") {
        gradeSum += grade;
        exersiseCounter++;

        if (grade <= 4.00) {
            badGradeCounter++;
            if (badGradeCounter === badGrade) {
                console.log(`You need a break, ${badGradeCounter} poor grades.`);
                break;
            }
        }

        exersiseName = input[index];

        if (exersiseName === "Enough") {
            isEnough = true;
            index -= 2;
            let lastProblem = input[index];
            let avg = gradeSum / exersiseCounter;

            if (isEnough) {
                console.log(`Average score: ${avg.toFixed(2)}`);
                console.log(`Number of problems: ${exersiseCounter}`);
                console.log(`Last problem: ${lastProblem}`);
            }
        }
        index++;
        grade = Number(input[index]);
        index++;

    }
}
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])