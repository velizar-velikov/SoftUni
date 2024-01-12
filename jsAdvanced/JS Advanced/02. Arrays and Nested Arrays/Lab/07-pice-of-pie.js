function piePiece(pieFlavors, flavor1, flavor2) {
    const startIndex = pieFlavors.indexOf(flavor1);
    const endIndex = pieFlavors.indexOf(flavor2);
    return pieFlavors.slice(startIndex, endIndex + 1);
}

let res = piePiece(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
console.log(res);