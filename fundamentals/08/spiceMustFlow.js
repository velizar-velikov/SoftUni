function spiceMustFlow(dailyYeild) {
    let total = 0;
    let days = 0;
    while (dailyYeild >= 100) {
        days++;
        total += dailyYeild - 26;
        dailyYeild -= 10;
    }
    if (total >= 26) {
        total -= 26;
    }
    console.log(days);
    console.log(total);

}
// spiceMustFlow(111)
spiceMustFlow(450)