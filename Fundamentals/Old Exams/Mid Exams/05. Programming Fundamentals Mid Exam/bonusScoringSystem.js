function bonusScoringSystem(input) {
    input = input.map(Number);
    let students = input.shift();
    let lecturesInACourse = input.shift();
    let additionalBonus = input.shift();

    let maxAttendance = 0;
    let maxBonus = 0;
    for (let i = 0; i < students; i++) {
        let = studentAttendance = input[i];
        let bonus = studentAttendance / lecturesInACourse * (5 + additionalBonus);
        if (bonus > maxBonus) {
            maxBonus = bonus;
            maxAttendance = studentAttendance;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])