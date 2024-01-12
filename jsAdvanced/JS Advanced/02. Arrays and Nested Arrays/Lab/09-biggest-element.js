function biggestElement(...arrs) {
    return arrs.flat(2)
        .sort((a, b) => b - a)[0];
}

const res = biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);
console.log(res);