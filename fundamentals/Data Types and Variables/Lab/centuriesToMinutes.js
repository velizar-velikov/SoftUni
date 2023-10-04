function centuriesToMinutes(numberOfCenturies) {
    let years = numberOfCenturies * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let mins = hours * 60;

    console.log(`${numberOfCenturies} centuries = ${years} years = ${days} days = ${hours} hours = ${mins} minutes`);
}
centuriesToMinutes(1)
centuriesToMinutes(5)