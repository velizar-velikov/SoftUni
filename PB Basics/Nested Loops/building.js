function buiding(input) {
    let floor = Number(input[0]);
    let rooms = Number(input[1]);

    for (let a = floor; a > 0; a--) {
        let buff = "";
        let ch = "";
        for (let b = 0; b < rooms; b++) {
            if (a === floor) {
                ch = "L";
            } else if (a % 2 === 0) {
                ch = "O";
            } else {
                ch = "A";
            }
            buff += `${ch}${a}${b} `
        }
        console.log(buff);
    }
}
buiding(["20", "12"])