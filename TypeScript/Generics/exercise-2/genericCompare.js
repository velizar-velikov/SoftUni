class Comparer {
    array;
    constructor(arr) {
        this.array = arr;
    }
    compare(comparator) {
        let foundTimes = 0;
        this.array.forEach((element) => {
            if (element === comparator) {
                foundTimes++;
            }
        });
        return foundTimes;
    }
}
const comparer = new Comparer(['a', 'b', 'ab', 'abc', 'cba', 'b']);
const isFoundTimes = comparer.compare('a');
console.log(isFoundTimes);
//# sourceMappingURL=genericCompare.js.map