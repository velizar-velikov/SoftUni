class Comparer<T> {
    array: T[];

    constructor(arr: T[]) {
        this.array = arr;
    }

    compare(comparator: unknown): number {
        let foundTimes = 0;
        this.array.forEach((element) => {
            if (element === comparator) {
                foundTimes++;
            }
        });
        return foundTimes;
    }
}

const comparer = new Comparer<string>(['a', 'b', 'ab', 'abc', 'cba', 'b']);
const isFoundTimes = comparer.compare('a');
console.log(isFoundTimes);
