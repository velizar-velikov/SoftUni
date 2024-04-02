"use strict";
function aggregateElements(nums) {
    const result = [
        nums.reduce((acc, val) => acc + val, 0),
        nums.reduce((acc, val) => acc + 1 / val, 0),
        nums.join(''),
    ];
    console.log(result.join('\n'));
}
aggregateElements([2, 4, 8, 16]);
//# sourceMappingURL=aggregateElements.js.map