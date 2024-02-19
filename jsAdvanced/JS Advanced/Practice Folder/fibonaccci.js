console.log(fibonacci(12));

function fibonacci(n) {

    if (n <= 0) {
        return 'The number must be positive!';
    } else if (n == 1 || n == 2) {
        return 1;
    }
    let nums = [1, 1];
    for (let i = 2; i < n; i++) {
        let a = nums[nums.length - 1] + nums[nums.length - 2];
        nums.push(a);
    }
    return nums[nums.length - 1];
}