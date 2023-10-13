function magicMatrices(arr) {
    let isEqual = true;
    let verticalSum = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let innerArr = arr[i];
        let currentSum = 0;
        let currentVerticalSum = 0;
        for (let j = 0; j < innerArr.length; j++) {
            currentSum += innerArr[j];
            currentVerticalSum += arr[j][i];
        }
        if (i < 1) {
            sum = currentSum;
            verticalSum = currentSum;
        } else if (sum !== currentSum || verticalSum != currentVerticalSum) {
            isEqual = false;
            break;
        }
    }

    if (verticalSum !== sum) {
        isEqual = false;
    }

    console.log(isEqual);
}
magicMatrices([[1, 2], 
               [2, 1]])