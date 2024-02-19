const arrayFlatInplementation = (function () {

    let counter = 0;

    /**@type {Array} The array to be returned from the method, kept in a closure*/
    let newArr = [];

    /**
     * 1. Implementation of Array.prototype.flat method
     * 2. Does not mutate the original array
     * 3. No parameter => depth = 1
     * 4. Depth > Actual depth flattens the array to primitive values
     * 5. Depth = 0 does not do anything
     * @param {number} depth The depth to which you want to flatten the array
     * @returns {Array} The flattened array
     */
    Array.prototype.flatten = function (depth) {

        if (depth === undefined) {
            depth = 1;
        } else if (depth >= getArrayDepth(this)) {
            depth = getArrayDepth(this) - 1;
        }
        let isFullyFlat = true;
        let flatted = false;

        if (counter == 0) {
            if (depth == 0) {
                return this;
            }
            //first pass over the array fills the newArr and it becomes "this"
            for (let i = 0; i < this.length; i++) {
                if (Array.isArray(this[i])) {
                    flatted = true;
                    isFullyFlat = false;
                    newArr.push(...this[i]);
                } else {
                    newArr.push(this[i]);
                }
            }
            depth--;
            counter++;
        }
        if (depth == 0) {
            return newArr;
        }

        //Every pass after the second mutates the newArr
        for (let i = 0; i < newArr.length; i++) {
            if (Array.isArray(newArr[i])) {
                flatted = true;
                isFullyFlat = false;
                const innerArr = newArr[i];
                newArr.splice(i, 1, ...innerArr);
                i += innerArr.length;
            }
        }

        if (flatted) {
            counter++;
            if (depth == 0) {
                isFullyFlat = true;
                return newArr;
            }
        }

        if (!isFullyFlat) {
            return newArr.flatten(depth - 1);
        }

        function getArrayDepth(arr) {
            let depth = 1;
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    const nestedDepth = getArrayDepth(arr[i]) + 1;
                    depth = Math.max(depth, nestedDepth);
                }
            }
            return depth;
        }
    }
})();

module.exports = arrayFlatInplementation;

//Testing the method
// const arr = [1, [2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]]];
// const flattenedArr = arr.flatten(4);
// const flattenedArr2 = arr.flat(4)
// console.log(flattenedArr);
// console.log(flattenedArr2);