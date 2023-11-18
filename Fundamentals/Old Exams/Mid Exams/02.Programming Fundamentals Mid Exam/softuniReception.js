function softuniReception(input) {

    // students per hour 
    let employeeOne = Number(input[0]);
    let employeeTwo = Number(input[1]);
    let employeeThree = Number(input[2]);
    let allEmployees = employeeOne + employeeTwo + employeeThree;

    let students = Number(input[3]);
    let hoursCount = 0;
    let hoursInaRow = 0;
    while (students > 0) {
        hoursInaRow++;
        hoursCount++;
        if (students > allEmployees) {
            students -= allEmployees;
        } else {
            students = 0;
            break;
        }
        if (hoursInaRow == 3) {
            hoursInaRow = 0;
            // 1h break
            hoursCount++;
        }
    }

    console.log(`Time needed: ${hoursCount}h.`);

}
softuniReception(['5', '6', '4', '20'])