function schoolRegister(input) {
    let grades = {};

    for (let info of input) {
        let [info1, info2, info3] = info.split(', ');
        let [, student] = info1.split(': ');
        let [, grade] = info2.split(': ');
        let [, score] = info3.split(': ');
        if (Number(score) < 3) continue;
        if (grades.hasOwnProperty(grade)) {
            grades[grade]['students'].push(student);
            grades[grade]['scores'].push(score);
        } else {
            grades[grade] = {};
            grades[grade]['students'] = [student];
            grades[grade]['scores'] = [score];
        }
    }
    let sortedGradesEntries = Object.entries(grades).sort((a, b) => a[0] - b[0]);
    sortedGradesEntries.forEach(([grade, { students, scores }]) => {
        console.log(`${Number(grade) + 1} Grade`);
        console.log(`List of students: ${students.join(', ')}`);
        let averageScore = (scores.reduce((acc, score) => acc + Number(score), 0) / scores.length).toFixed(2);
        console.log(`Average annual score from last year: ${averageScore}`);
        console.log(' ');
    })
}

// schoolRegister([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//         "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//         "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//         "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//         "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//         "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//         "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//         "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//         "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//         "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//         "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//         "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
//     ])

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
])