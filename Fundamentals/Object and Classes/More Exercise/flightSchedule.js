function scheduleFlights(input) {

    class Flight {
        status = 'Ready to fly';
        constructor(code, destination) {
            this.code = code;
            this.destination = destination;
        }
    }

    let allFlightsData = input.shift();

    let allFlights = [];

    for (let info of allFlightsData) {
        let tokens = info.split(' ');
        let code = tokens.shift();
        let destination = tokens.join(' ');
        let flight = new Flight(code, destination);
        allFlights.push(flight);
    }

    let changingStatusInfo = input.shift();
    let cancelledFlights = [];

    for (let info of changingStatusInfo) {
        let [code] = info.split(' ');

        for (let flight of allFlights) {
            if (code === flight['code']) {
                cancelledFlights.push(flight);
                allFlights.splice(allFlights.indexOf(flight), 1);
            }
        }
    }

    cancelledFlights.sort((flightOne, flightTwo) => flightOne['destination'].localeCompare(flightTwo['destination']));

    let typeFlight = input.shift()[0];

    if (typeFlight === 'Cancelled') {
        cancelledFlights.forEach(flight => console.log(`{ Destination: '${flight.destination}', Status: 'Cancelled' }`))
    } else {
        allFlights.forEach(flight => console.log(`{ Destination: '${flight.destination}', Status: 'Ready to fly' }`))
    }


}
scheduleFlights([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
])

// scheduleFlights([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK330 Cancelled'],
//  ['Ready to fly']
// ])


