function diagonalSum(arrs) {
    let mainSum = 0;
    let secondarySum = 0;
    for (let i = 0; i < arrs.length; i++) {
        mainSum += arrs[i][i];
        secondarySum += arrs[i][arrs.length - 1 - i];
    }
    console.log(mainSum + ' ' + secondarySum);
}

diagonalSum([[20, 40],
[10, 60]])