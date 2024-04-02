"use strict";
const getBiggerhalf = (nums) => {
    const sortedNums = nums.sort((a, b) => a - b);
    return sortedNums.filter((num, i, self) => i >= Math.floor(self.length / 2));
};
console.log(getBiggerhalf([4, 7, 2, 5]));
//# sourceMappingURL=biggerHalf.js.map