function gameOfIntervals(input) {
    let moves = Number(input[0]);

    let num = 0;
    let interval1 = 0;
    let interval2 = 0;
    let interval3 = 0;
    let interval4 = 0;
    let interval5 = 0;
    let invalid = 0;
    let result = 0;

    for (let i = 1; i <= moves; i++) {
        num = Number(input[i]);


        if (num >= 0 && num <= 9) {
            result += num * 0.20;
            interval1++;
        } else if (num >= 10 && num <= 19) {
            result += num * 0.30;
            interval2++;
        } else if (num >= 20 && num <= 29) {
            result += num * 0.40;
            interval3++;
        } else if (num >= 30 && num <= 39) {
            result += 50;
            interval4++;
        } else if (num >= 40 && num <= 50) {
            result += 100;
            interval5++;
        } else {
            result = result / 2;
            invalid++;
        }
    }
    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${(interval1 / moves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(interval2 / moves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(interval3 / moves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(interval4 / moves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(interval5 / moves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalid / moves * 100).toFixed(2)}%`);
}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])