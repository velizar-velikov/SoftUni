function equalNeighbours(input) {
    let equalPairsCount = 0;
    for (let i = 0; i < input.length; i++) {
        let array = input[i];
        for (let j = 0; j < array.length; j++) {
            let secondCheck = i < input.length - 1 ? input[i + 1][j] : null;
            if (array[j] === array[j + 1] || array[j] === secondCheck) {
                equalPairsCount++;
            }
        }
    }
    return equalPairsCount;
}
console.log(equalNeighbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));