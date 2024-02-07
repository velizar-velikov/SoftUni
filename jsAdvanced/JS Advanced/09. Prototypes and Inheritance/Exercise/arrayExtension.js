(function () {

    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        validateIndex(n);
        return this.slice(n);
    };
    Array.prototype.take = function (n) {
        validateIndex(n);
        return this.slice(0, n);
    };
    Array.prototype.sum = function () {
        return this.reduce((acc, val) => acc + val, 0);
    };
    Array.prototype.average = function () {
        return this.length == 0 ? 0 : this.reduce((acc, val) => acc + val, 0) / this.length;
    }

    function validateIndex(index) {
        if (index < 0 || index > this.length - 1) {
            throw new RangeError('Invalid index');
        } else if (!Number.isInteger(index)) {
            throw new TypeError('Index must be an integer');
        }
    }
})();

const myArr = [0, 1, 2, 3, 4, 5];
const res = myArr.skip(0);
console.log(res);