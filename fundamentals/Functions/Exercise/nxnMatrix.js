let nxnMatrix = n => {
    let matrix = '';
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += n + ' ';
        }
        matrix += row + '\n';
    }
    console.log(matrix);
}
nxnMatrix(6)