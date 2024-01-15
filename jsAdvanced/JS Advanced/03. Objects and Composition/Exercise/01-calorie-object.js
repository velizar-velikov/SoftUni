const calorieObject = (input) => input.reduce((acc, val, i, self) => {
    i % 2 == 0 ? acc[val] = '' : acc[self[i - 1]] = Number(val);
    return acc;
}, {});
const res = calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log(res);