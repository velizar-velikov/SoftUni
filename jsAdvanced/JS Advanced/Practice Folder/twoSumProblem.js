function twoSum(nums, target) {

    for (let i = 0; i < nums.length - 1; i++) {

        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return -1;
}

console.log(twoSum([1, 2, 3, 4], 8));