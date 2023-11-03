function minerTask(input) {
    let reources = {};

    for (let i = 0; i < input.length; i += 2) {
        let source = input[i];
        let quantity = Number(input[i + 1]);

        if (reources.hasOwnProperty(source)) {
            reources[source] += quantity;
        } else {
            reources[source] = quantity;
        }
    }

    for (let [sourse, quantity] of Object.entries(reources)) {
        console.log(`${sourse} -> ${quantity}`);
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])