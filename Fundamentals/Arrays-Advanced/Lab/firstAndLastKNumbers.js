let firstAndLastKNumbers = nums => {
    let k = nums.shift();
    console.log(nums.slice(0, k).join(' '));
    console.log(nums.slice(-k, nums.length).join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9])