function cooking(num, ...operations) {

    const operationTypes = {
        chop: num => num / 2,
        dice: num => Math.sqrt(num),
        spice: num => num + 1,
        bake: num => num * 3,
        fillet: num => num * 0.8
    }
    operations.forEach(operation => {
        num = operationTypes[operation](num);
        console.log(num);
    });
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');