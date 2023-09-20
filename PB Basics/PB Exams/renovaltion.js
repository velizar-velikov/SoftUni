function renovaltion(input) {
    let height = Number(input[0]);
    let width = Number(input[1]);
    let procentForWindows = Number(input[2]);

    let area = Math.ceil(4 * (height * width) * (100 - procentForWindows) / 100);
    let index = 3;
    let command = input[index];
    while (command !== "Tired!") {
        let liters = Number(command);
        area -= liters;
            if (area === 0) {
                console.log("All walls are painted! Great job, Pesho!");
                break;
            }else if (area < 0) {
                console.log(`All walls are painted and you have ${Math.abs(area)} l paint left!`);
                break;
            }


        index++;
        command = input[index];

    }

    if (command === "Tired!") {
        console.log(`${area} quadratic m left.`);
    }
}
renovaltion(["3", "5", "10", "2", "3", "4", "Tired!"])