function footballLeague(input) {
    let capacity = Number(input[0]);
    let fans = Number(input[1]);

    let fanSector = "";
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 2; i < input.length; i++) {
        fanSector = input[i];

        switch (fanSector) {
            case "A": sectorA++; break;
            case "B": sectorB++; break;
            case "V": sectorV++; break;
            case "G": sectorG++; break;
        }

    }
    console.log(`${(sectorA / fans * 100).toFixed(2)}%`);
    console.log(`${(sectorB / fans * 100).toFixed(2)}%`);
    console.log(`${(sectorV / fans * 100).toFixed(2)}%`);
    console.log(`${(sectorG / fans * 100).toFixed(2)}%`);
    console.log(`${(fans / capacity * 100).toFixed(2)}%`);
}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"])