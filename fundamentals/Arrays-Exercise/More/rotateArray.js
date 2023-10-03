function rotateArray(arr) {
    let rotations = arr.pop();
    for (let i = 0; i < rotations; i++) {
        let num = arr.pop();
        arr.unshift(num);
    }
    console.log(arr.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])