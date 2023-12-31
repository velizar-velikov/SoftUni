function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};

function solve(area, vol, input) {
    let arr = JSON.parse(input)
        .map(coords => ({
            "area": area.call(coords),
            "volume": vol.call(coords)
        }));
    return arr;
}

let result = solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`);

console.log(result);
