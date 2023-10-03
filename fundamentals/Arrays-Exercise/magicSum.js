function magicSum(arr, givenSum) {
    for (let i = 0; i < arr.length; i++) {
        currentSum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            let newArr = [];
            currentSum = arr[i] + arr[j];
            if (currentSum == givenSum) {
                newArr.push(arr[i], arr[j]);
                console.log(newArr.join(' '));
            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6],
    6)