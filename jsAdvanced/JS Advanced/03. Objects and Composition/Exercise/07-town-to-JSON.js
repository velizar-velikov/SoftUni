function townToJSON(input) {

    let output = [];
    input.forEach((info, i) => {
        if (i == 0) return;
        info = info.substring(2, info.length - 1 - 1);
        let [Town, Latitude, Longitude] = info.split(' | ');
        output.push({
            Town,
            Latitude: Number(Number(Latitude).toFixed(2)),
            Longitude: Number(Number(Longitude).toFixed(2))
        })
    })
    return JSON.stringify(output);
}

const res = townToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);
console.log(res);