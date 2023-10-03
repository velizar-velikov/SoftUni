function equalSum(arr) {
    let areEqual = false;
    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let a = i - 1; a >= 0; a--) {
            if (a < 0) {
                sumLeft = 0;
                break;
            } else {
                sumLeft += arr[a];
            }
        }

        for (let b = i + 1; b < arr.length; b++) {
            sumRight += arr[b];
        }

        if (sumLeft == sumRight) {
            areEqual = true;
            console.log(i);
        }
    }

    if (!areEqual) {
        console.log('no');
    }
}
equalSum([1, 2])