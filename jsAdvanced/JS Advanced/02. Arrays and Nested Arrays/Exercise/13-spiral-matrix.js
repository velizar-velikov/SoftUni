function spiralMatrix(rows, cols) {

    let num = 1;

    let spiral = []

    for (let i = 0; i < rows; i++) {
        let innerArr = [];
        for (let j = 0; j < cols; j++) {
            innerArr.push('');
        }
        spiral.push(innerArr);
    }

    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;
    let counter = 0;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            spiral[startRow][i] = ++counter
        }
        startRow++
        for (let i = startRow; i <= endCol; i++) {
            spiral[i][endCol] = ++counter
        }
        endCol--
        for (let i = endCol; i >= startCol; i--) {
            spiral[endRow][i] = ++counter
        }
        endRow--
        for (let i = endRow; i >= startRow; i--) {
            spiral[i][startCol] = ++counter
        }
        startCol++
    }

    spiral.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(7, 7)