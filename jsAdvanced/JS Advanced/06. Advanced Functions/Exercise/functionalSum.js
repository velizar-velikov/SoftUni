let outer = (function () {
    let sum = 0;

    return function add(num) {
        sum += num;
        add.toString = () => sum;
        return add;
    }
})();

console.log(outer(6)(7)(3).toString());