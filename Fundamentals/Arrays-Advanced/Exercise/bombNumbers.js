function bombNumbers(nums, bombArr) {
    let specialNumber = bombArr[0];
    let radius = bombArr[1];

    while (nums.includes(specialNumber)) {
        let i = nums.indexOf(specialNumber);
            nums.splice(Math.max(i - radius, 0), radius * 2 + 1, 0);
    }

    let sum = 0;
    for (let item of nums) {
        sum += item;
    }
    console.log(sum);
}
bombNumbers([1, 4, 2, 2, 4, 9, 1],
    [4, 2])