function moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let volume = width * length * height;

    let index = 3;
    let command = input[index];

    while (command !== "Done"){
        index++;
        let boxes = Number(command);
        volume -= boxes;

        if (volume <= 0){
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            break;
        }
        command = input[index];
    }
    if (command === "Done" && volume > 0){
        console.log(`${volume} Cubic meters left.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])