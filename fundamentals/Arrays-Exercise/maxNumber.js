function maxNumber(arr) {
    let topInts = [];
    for (let i = 0; i < arr.length; i++) {
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] >= arr[i]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topInts.push(arr[i]);
        }
    }
    console.log(topInts.join(' '));
}
maxNumber([41, 41, 34, 20])