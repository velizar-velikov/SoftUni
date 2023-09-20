function minNumber(input) {
    let index = 0;
    let entry = input[index];
    index++;
    let num = 0;
    let min = Number.MAX_SAFE_INTEGER;

    while (entry !== "Stop") {
        num = Number(entry);

        if (num < min) {
            min = num;
        }

        entry = input[index];
        index++;
    }
    console.log(min);
}
minNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"])