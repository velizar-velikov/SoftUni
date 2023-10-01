function equalArrays(arr1, arr2) {
    let sum = 0;
    let isIdentical = true;
    for (let i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
        arr1[i] = Number(arr1[i]);
        arr2[i] = Number(arr2[i]);
        if (arr1[i] == arr2[i]) {
            sum += arr1[i];
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false;
            break;
        }
    }
    if (isIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])