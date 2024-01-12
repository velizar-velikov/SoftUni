function processOddNums(nums) {
    return nums.filter((num, i) => i % 2 !== 0)
        .map(num => num * 2)
        .reverse()
        .join(' ');
}

let res = processOddNums([3, 0, 10, 4, 7, 3]);
console.log(res);