function magicMatrices(matrix) {
    let isMagical = true;
    const firstRowSum = matrix[0].reduce((acc, val) => acc + val, 0);
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].reduce((acc, val) => acc + val, 0) != firstRowSum) {
            return !isMagical;
        }
        let verticalSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            verticalSum += matrix[j][i];
        }
        if (verticalSum != firstRowSum) {
            return !isMagical;
        }
    }
    return isMagical;
}
const result = magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);
console.log(result);