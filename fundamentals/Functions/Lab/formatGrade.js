function formatGrade(grade) {
    let res = '';
    if (grade < 3.00) {
        res = 'Fail';
        grade = 2;
    } else if (grade < 3.50) {
        res = 'Poor';
    } else if (grade < 4.50) {
        res = 'Good';
    } else if (grade < 5.50) {
        res = 'Very good';
    } else {
        res = 'Excellent';
    }
    let gradeToPrint = grade < 3.00 ? grade : grade.toFixed(2);
    console.log(`${res} (${gradeToPrint})`);
}
formatGrade(2.99)