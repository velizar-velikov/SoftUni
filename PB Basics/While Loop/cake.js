function cake(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let pieces = length * width;

    let index = 2;
    let command = input[index];

    while (command !== "STOP") {
        index++;
        let takenPieces = Number(command);
        pieces -= takenPieces;
        if (pieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
            break;
        }
        command = input[index];
    }

    if (command === "STOP") {
        console.log(`${pieces} pieces are left.`);
    }

}
cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])