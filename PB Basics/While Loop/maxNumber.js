function maxNumber(input) {
    let index = 0;
    let entry = input[index];
    index++;
    let num = 0;
    let max = Number.MIN_SAFE_INTEGER;

    while (entry !== "Stop") {
        num = Number(entry);

        if (num > max) {
            max = num;
        }
        entry = input[index];
        index++;
    }
    console.log(max);
}
maxNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"])