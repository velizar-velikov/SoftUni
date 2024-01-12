function biggerHalf(nums) {
    return nums.sort((a, b) => a - b)
        .slice(Math.floor(nums.length / 2));
}

let res = biggerHalf([4, 7, 2, 5, 9]);
console.log(res);