function juiceFlavours(input) {

    let juices = {};
    let bottles = {};
    input.forEach(info => {
        let [juice, qty] = info.split(' => ');
        qty = Number(qty);

        if (!juices[juice]) {
            juices[juice] = qty;
        } else {
            juices[juice] += qty;
        }

        if (juices[juice] >= 1000) {
            let newBottles = Math.floor(juices[juice] / 1000)
            if (!bottles[juice]) {
                bottles[juice] = newBottles;
            } else {
                bottles[juice] += newBottles;
            }
            juices[juice] -= newBottles * 1000;
        }
    })

    Object.entries(bottles).forEach(([juice, bottleCount]) => {
        console.log(`${juice} => ${bottleCount}`);
    })
}

//TESTING
juiceFlavours(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])

// juiceFlavours(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549'])