function sortNumber(nums) {
    const rearrangedNums = [];
    nums.sort((a, b) => a - b);
    while (nums.length > 0) {
        rearrangedNums.push(nums.shift(), nums.pop());
    }
    return rearrangedNums;
}
const res = sortNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
console.log(res);