function worldTour(input) {

    let stops = input.shift();
    let command = input.shift();

    while (command !== 'Travel') {
        let tokens = command.split(':');
        let action = tokens.shift();

        if (action === 'Add Stop') {
            let index = Number(tokens[0]);
            let str = tokens[1];
            stops = stops.split('');
            if (index >= 0 && index < stops.length) {     
                stops.splice(index, 0, str);
                stops = stops.join('');
            }
        } else if (action === 'Remove Stop') {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);
            if (startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length) {
                stops = stops.replace(stops.substring(startIndex, endIndex + 1), '');
            }
        } else if (action === 'Switch') {
            let oldStr = tokens[0];
            let newStr = tokens[1].trim();
            let startIndex = 0;
            while (stops.substring(startIndex, stops.length).includes(oldStr)) {
                stops = stops.substring(0, startIndex) + stops.substring(startIndex, stops.length).replace(oldStr, newStr);
                startIndex = stops.lastIndexOf(newStr) + newStr.length;
            }
        }
        console.log(stops);
        command = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
// worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
//     "Add Stop:3:Nigeria",
//     "Remove Stop:4:8",
//     "Switch:Albania: Azərbaycan",
//     "Switch:a:Praz",
//     "Travel"])