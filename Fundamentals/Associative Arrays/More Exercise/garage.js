function garage(input) {
    let garages = {};

    while (input.length > 0) {
        command = input.shift();

        let [garageNum, info] = command.split(' - ');
        if (garageNum in garages) {
            garages[garageNum].push(info.split(': ').join(' - '));
        } else {
            garages[garageNum] = [];
            garages[garageNum].push(info.split(': ').join(' - '));
        }
    }

    for (let garage in garages) {
        console.log(`Garage № ${garage}`);
        garages[garage].forEach(info => console.log(`--- ${info}`));
    }
}
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'])
