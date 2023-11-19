function destinationMapper(input) {

    let pattern = /(?<sign>[=/])(?<destination>[A-Z][A-Za-z]{2,})\k<sign>/g;
    let matches = [...input.matchAll(pattern)];
    let points = 0;
    let destinations = [];
    matches.forEach(match => {
        points += match.groups.destination.length;
        destinations.push(match.groups.destination);
    });
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
destinationMapper("ThisIs some InvalidInput")