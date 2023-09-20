function solve(input) {
    let days = Number(input[0]);
    let kmsForADay = Number(input[1]);
    let totalKm = kmsForADay;

    for (let i = 2; i < input.length; i++) {
        let procentIncreaseForThatDay = Number(input[i]);
        kmsForADay += procentIncreaseForThatDay / 100 * kmsForADay;
        totalKm += kmsForADay;
    }

    if (totalKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalKm - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKm)} more kilometers`);
    }

}
solve(["4",
    "100",
    "30",
    "50",
    "60",
    "80"])