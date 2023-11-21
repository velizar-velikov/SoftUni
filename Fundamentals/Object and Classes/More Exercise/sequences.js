function sequences(input) {
    let allArrays = [];
    for (let str of input) {
        let arr = JSON.parse(str).sort((a, b) => b - a);
        allArrays.push(JSON.stringify(arr));
    }
    Array.from(new Set(allArrays))
        .map(arr => JSON.parse(arr))
        .sort((a, b) => a.length - b.length)
        .forEach(arr => console.log(`[${arr.join(', ')}]`));
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"])

// sequences(["[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"])