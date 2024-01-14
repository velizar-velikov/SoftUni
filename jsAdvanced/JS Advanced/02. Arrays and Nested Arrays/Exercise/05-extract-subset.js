function extractSubsetArr(nums) {

    const increasingNums = [nums.shift()];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= increasingNums[increasingNums.length - 1]) {
            increasingNums.push(nums[i]);
        }
    }
    return increasingNums;
}

const res = extractSubsetArr([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])

console.log(res);