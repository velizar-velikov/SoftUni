function numbers(input) {
    let nums = input.split(' ').map(Number);
    let avgValue = nums.reduce((acc, num) => acc + num, 0) / nums.length;

    let numGreaterThanAvg = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > avgValue) {
            numGreaterThanAvg.push(nums[i]);
        }
    }
    numGreaterThanAvg = numGreaterThanAvg.sort((a, b) => b - a);
    let topFive = numGreaterThanAvg.slice(0, 5);
    if (topFive.length) {
        console.log(topFive.join(' '));
    } else {
        console.log('No');
    }
}
numbers('1')