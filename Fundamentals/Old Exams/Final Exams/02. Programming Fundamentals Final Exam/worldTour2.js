function worldTour(input) {
    let stops = input.shift();
    let command = input.shift();

    while(command !== 'Travel') {
        let [action, ...tokens] = command.split(':');

        if (action === 'Add Stop') {
            let index = Number(tokens[0]);
            let str = tokens[1];
            if (index >= 0 && index < stops.length) {
                stops = stops.substring(0, index) + str + stops.substring(index);
            }
        } else if (action === 'Remove Stop') {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);
            if (startIndex >= 0 && startIndex < stops.length
                && endIndex >= 0 && endIndex < stops.length) {
                    stops = stops.substring(0, startIndex) + stops.substring(endIndex + 1);
                }
        } else if (action === 'Switch') {
            let oldStr = tokens[0];
            let newStr = tokens[1];
            stops = stops.split(oldStr).join(newStr);
        }
        console.log(stops);
        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

// worldTour(["Hawai::Cyprys-Greece",
// "Add Stop:7:Rome",
// "Remove Stop:11:16",
// "Switch:Hawai:Bulgaria",
// "Travel"])

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])