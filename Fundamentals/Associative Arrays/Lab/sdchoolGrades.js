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
    let sortedStudentGradesByName = new Map(Array.from(studentGrades).sort((a, b) => a[0].localeCompare(b[0])));
    for (let [name, grades] of sortedStudentGradesByName) {
        console.log(`${name}: ${(grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(2)}`);
    }
}
schoolGrages(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'])
