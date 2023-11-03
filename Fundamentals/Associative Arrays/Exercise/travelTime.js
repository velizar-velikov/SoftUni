function travelTime(input) {
    
    let destinations = new Object();
    for (let info of input) {
        let [country, cityName, price] = info.split(' > ');
        if (country in destinations) {
            if (cityName in destinations[country]) {
                if (price < destinations[country][cityName]) {
                    destinations[country][cityName] = price;
                }
            } else {
                destinations[country][cityName] = price;
            }
        } else {
            let countryObj = new Object();
            countryObj[cityName] = price;
            destinations[country] = countryObj;
        }
    }

    destinations = Object.fromEntries(Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0])));

    for (let country in destinations) {
        
        destinations[country] = Object.fromEntries(Object.entries(destinations[country]).sort((a, b) => a[1] - b[1]));

        let cityInfo = '';
        for (let [city, price] of Object.entries(destinations[country])) {
            cityInfo += `${city} -> ${destinations[country][city]} `;
        }
        console.log(`${country} -> ${cityInfo}`);
    }

}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ])