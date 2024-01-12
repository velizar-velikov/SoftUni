function equalNeighbours(arrs) {
    let equalNeighboursCount = 0;

    for (let i = 0; i < arrs.length; i++) {
        const innerArr = arrs[i];
        for (let j = 0; j < innerArr.length; j++) {
            if (innerArr[j] == innerArr[j + 1]) {
                equalNeighboursCount++;
            }
            if (arrs[i + 1] !== undefined && innerArr[j] == arrs[i + 1][j]) {
                equalNeighboursCount++;
            }
        }
    }
    console.log(equalNeighboursCount);
}

equalNeighbours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])