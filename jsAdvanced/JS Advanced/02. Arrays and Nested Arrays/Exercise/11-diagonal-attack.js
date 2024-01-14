function diagonalAttack(arr) {

    const matrix = [];
    arr.forEach(row => {
        matrix.push(row.split(' ').map(Number));
    })

    let mainSum = 0;
    let secondarySum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][i];
        secondarySum += matrix[i][matrix.length - 1 - i];
    }
    if (mainSum != secondarySum) {
        matrix.forEach(row => console.log(row.join(' ')));
        return;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (j != i && (j != matrix.length - 1 - i)) matrix[i][j] = mainSum;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])