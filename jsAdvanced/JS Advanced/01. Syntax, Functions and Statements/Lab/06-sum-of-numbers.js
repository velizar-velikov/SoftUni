function sumNumbers(n, m) {
    let nums = [];
    n = Number(n);
    m = Number(m);
    for (let i = n; i <= m; i++) {
        nums.push(i);
    }
    return nums.reduce((acc, num) => acc + num, 0);
}

console.log(sumNumbers('-8', '-7'));