function grades(input) {
    let students = Number(input[0]);

    let currentGrade = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let gradeSum = 0;

    for (let i = 1; i <= students; i++) {
        currentGrade = Number(input[i]);

        if (currentGrade <= 2.99) {
            d++;
        } else if (currentGrade <= 3.99) {
            c++;
        } else if (currentGrade <= 4.99) {
            b++;
        } else {
            a++;
        }
        gradeSum += currentGrade;
    }
    let avgGrade = gradeSum / students;

    console.log(`Top students: ${(a / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(b / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(c / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${(d / students * 100).toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);
}
grades(["6", "2", "3", "4", "5", "6", "2.2"])