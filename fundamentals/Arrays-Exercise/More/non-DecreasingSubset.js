function nonDecreasingSubset(nums) {
    let max = nums[0];
    let filteredArray = nums.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    })
    console.log(filteredArray.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])