//70/100 точки
function highJump(input) {
    let wantedHeight = Number(input[0]);
    let currentHeight = wantedHeight - 30;
    let jumpCount = 0;
    let consequentFailCounter = 0;
    let hasFailed = false;

    for (let i = 1; i < input.length; i++) {
        jumpCount++;
        let oldHeight = currentHeight;
        let currentJump = Number(input[i]);
        if (currentJump > currentHeight) {
            if (currentJump > wantedHeight) {
                hasFailed = false;
                break;
            }
            currentHeight += 5;
            consequentFailCounter = 0;
        } else if (oldHeight === currentHeight) {
            consequentFailCounter++;
        }
        if (consequentFailCounter === 3) {
            hasFailed = true;
            break;
        }
    }
    if (hasFailed) {
        console.log(`Tihomir failed at ${currentHeight}cm after ${jumpCount} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${currentHeight}cm after ${jumpCount} jumps.`);
    }
}
highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])