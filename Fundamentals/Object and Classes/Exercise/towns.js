
// class TownInfo {
//     constructor(town, latitude, longitude) {
//         this.town = town;
//         this.latitude = latitude;
//         this.longitude = longitude
//     }
//     printing () {
//         console.log(this);
//     }
// }
function createAndPrintObjects(input) {
    for (let item of input) {
        let tokens = item.split(' | ');
        let town = tokens[0];
        let latitude = parseFloat(tokens[1]).toFixed(2);
        let longitude = parseFloat(tokens[2]).toFixed(2);
        let townInfo = {
            town,
            latitude,
            longitude
        }
        console.log(townInfo);
    }
}
createAndPrintObjects(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])