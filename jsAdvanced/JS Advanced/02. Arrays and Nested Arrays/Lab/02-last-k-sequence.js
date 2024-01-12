function lastKNums(n, k) {
    const nums = [1];
    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        let end = nums.length > k ? k : nums.length;
        for (let j = 0; j < end; j++) {
            sum += nums[i - j];
        }
        nums.push(sum);
    }
    return nums;
}
lastKNums(8, 2)