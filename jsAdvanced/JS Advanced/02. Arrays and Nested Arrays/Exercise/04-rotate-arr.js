function rotateArr(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        const numToRotate = arr.pop();
        arr.unshift(numToRotate);
    }
    console.log(arr.join(' '));
}

rotateArr(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)