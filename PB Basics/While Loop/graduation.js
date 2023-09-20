function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let grade = Number(input[index]);
    index++;
    let level = 0;
    let sumGrade = 0;
    let badGradeCount = 0;
    let passed = true;

    while (grade >= 2) {
        sumGrade += grade;
        if (grade < 4.00) {
            badGradeCount++;
            if (badGradeCount === 2) {
                passed = false;
                console.log(`${name} has been excluded at ${level} grade`);
                break;
            }
            level++;
            continue;
        }
        level++;
        grade = Number(input[index]);
        index++;
    }
    let avg = sumGrade / 12;

    if (passed)
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])