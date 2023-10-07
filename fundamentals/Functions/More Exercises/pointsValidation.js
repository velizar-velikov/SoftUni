function pointsValidation(arrOfPoints) {
    let isValid = true;
    let x1 = arrOfPoints[0];
    let y1 = arrOfPoints[1];
    let x2 = arrOfPoints[2];
    let y2 = arrOfPoints[3];

    let distanceFromPointOneToZero = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let distanceFromPointTwoToZero = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));

    if (Number.isInteger(distanceFromPointOneToZero)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distanceFromPointTwoToZero)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let distanceFromPointOneToPointTwo = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    if (Number.isInteger(distanceFromPointOneToPointTwo)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
pointsValidation([2, 1, 1, 1])