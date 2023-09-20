function numberPyramid(input) {
    let n = Number(input[0]);
    let rows = 1;
    let printNumber = 1;
    let isFinished = false;


    while (rows <= n) {
        let buff = "";
        for (let cols = 1; cols <= rows; cols++) {
            buff += printNumber + " ";
            printNumber++;
            if (printNumber > n) {
                isFinished = true;
                break;
            }
        }
        console.log(buff);
        if (isFinished) {
            break;
        }
        rows++;
    }
}
numberPyramid(["1"])