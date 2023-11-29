function destinationMapper(input) {
    let pattern = /([=\/])(?<city>[A-Z][A-Za-z]{2,})\1/g;
    let matches = [...input.matchAll(pattern)];
    let points = 0;
    let destinations = [];
    if (matches) {
        matches.forEach(match => {
            points += match.groups.city.length;
            destinations.push(match.groups.city);
        });
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")

destinationMapper("ThisIs some InvalidInput")