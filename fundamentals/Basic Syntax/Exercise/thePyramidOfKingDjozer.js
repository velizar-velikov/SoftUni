function thePyramidOfKingDjozer(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let stepsCounter = 0;
    for (let i = base; i >= 1; i -= 2) {
        stepsCounter++;
        if (i == 1) {
            gold = 1;
        } else if (i == 2) {
            gold = i * i * increment;
        } else {
            stone += Math.pow((i - 2), 2) * increment;
            if (stepsCounter % 5 == 0) {
                lapisLazuli += (i * 4 - 4) * increment;
            } else {
                marble += (i * 4 - 4) * increment;
            }
        }
    }
    let height = stepsCounter * increment;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKingDjozer(23, 0.5)