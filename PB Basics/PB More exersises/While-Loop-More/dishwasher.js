function dishwasher(input) {
    let bottles = Number(input[0]);
    let availableDetergent = bottles * 750;

    let mlPerPlate = 5;
    let mlPerPot = 15;

    let index = 1;
    let command = input[index];
    let num = 0;
    let loadingCounter = 0;
    let platesWashed = 0;
    let potsWashed = 0;

    while (command !== "End") {
        index++;
        loadingCounter++;
        num = Number(command);
        if (loadingCounter % 3 === 0) {
            potsWashed += num;
            availableDetergent -= num * mlPerPot;
        } else {
            platesWashed += num;
            availableDetergent -= num * mlPerPlate;
        }

        if (availableDetergent < 0) {
            console.log(`Not enough detergent, ${Math.abs(availableDetergent)} ml. more necessary!`);
            break;
        }

        command = input[index];
    }

    if (command === "End") {
        console.log("Detergent was enough!");
        console.log(`${platesWashed} dishes and ${potsWashed} pots were washed.`);
        console.log(`Leftover detergent ${availableDetergent} ml.`);
    }
}
dishwasher(["2", "53", "65", "55", "End"])