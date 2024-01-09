function aggregateElements(nums) {
    console.log(nums.reduce((acc, num) => acc + num, 0));
    console.log(nums.reduce((acc, num) => acc + 1 / num, 0));
    console.log(nums.reduce((acc, num) => acc + num, ''));
}

aggregateElements([2, 4, 8, 16])