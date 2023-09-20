function traveling(input) {
    let index = 0;
    let command = input[index];

    while (command !== "End") {
        let destination = command;
        index++;
        command = input[index];
        let neededMoney = Number(command);
        let savedMoney = 0;
        index++;
        command = input[index];
        while (savedMoney < neededMoney) {
            savedMoney += Number(command);
            index++;
            command = input[index];
            if (savedMoney >= neededMoney) {
                console.log(`Going to ${destination}!`);
            }
        }
    }
}
traveling()