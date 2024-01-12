function negativePositiveNums(nums) {
    const arrangedNums = [];
    nums.forEach(num => {
        if (num < 0) {
            arrangedNums.unshift(num)
        } else {
            arrangedNums.push(num)
        }
    })
    return arrangedNums;
}

const res = negativePositiveNums([7, -2, 8, 9]);
console.log(res);