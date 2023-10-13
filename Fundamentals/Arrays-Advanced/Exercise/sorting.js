function sorting(arr) {
    arr.sort((a, b) => b - a);
    for (let i = 1; i < arr.length; i += 2) {
        let popped = arr.pop();
        arr.splice(i, 0, popped);
    }
    console.log(arr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])