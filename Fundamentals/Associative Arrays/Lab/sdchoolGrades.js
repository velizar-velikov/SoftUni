function schoolGrages(input) {
    let studentGrades = new Map();
    for (let item of input) {
        let tokens = item.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);
        if (!studentGrades.has(name)) {
            studentGrades.set(name, grades);
        } else {
            let oldGrades = studentGrades.get(name);
            grades.forEach(grade => oldGrades.push(grade));
            studentGrades.set(name, oldGrades);
        }
    } 
    let sortedStudentGradesByName = new Map(Array.from(studentGrades).sort((a, b) => a[0] - b[0]));
    console.log(studentGrades);
    console.log(sortedStudentGradesByName);
}
schoolGrages(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])
