function subSum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    return arr.slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((acc, val) => acc + Number(val), 0);
}
let res;
// res = subSum([10, 20, 30, 40, 50, 60], 3, 300)
// res = subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
// res = subSum([10, 'twenty', 30, 40], 0, 2)
// res = subSum([], 1, 2)
res = subSum('text', 0, 2)

console.log(res);