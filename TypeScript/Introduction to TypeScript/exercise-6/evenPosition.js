"use strict";
function evenPosition(nums) {
    const numsAtEvenPositions = nums.filter((num, i) => i % 2 === 0);
    console.log(numsAtEvenPositions.join(' '));
}
evenPosition(['20', '30', '40', '50', '60']);
//# sourceMappingURL=evenPosition.js.map