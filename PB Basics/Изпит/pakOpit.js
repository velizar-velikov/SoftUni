function solve(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);


    let rotationCounter = 1;
    let isOver = false;

    let isSix = false;

    for (let i = k; i <= 8; i++) {
        let a = 0;
        if (i % 2 === 0) {
            a = i;
        }
        for (let j = 9; j >= l; j--) {
            let b = 0;
            if (j % 2 !== 0) {
                b = j;
            }
            for (let p = m; p <= 8; p++) {
                let c = 0;
                if (p % 2 === 0) {
                    c = p;
                }
                for (let r = 9; r >= n; r--) {
                    let d = 0;
                    if (r % 2 !== 0) {
                        d = r;
                    }
                    if (a !== 0 && b !== 0 && c !== 0 && d !== 0) {
                        if (a === c && b === d) {

                            if (isSix) {
                                break;
                            }
                            console.log("Cannot change the same player.");
                        } else {
                            
                            if (rotationCounter === 6) {
                                isSix = true;
                            }
                            
                            if (rotationCounter > 6) {
                                isOver = true;
                                break;
                            }
                            console.log(`${a}${b} - ${c}${d}`);
                            rotationCounter++;
                        }
                    }
                    if (isOver) {
                        break;
                    }
                }
                if (isOver) {
                    break;
                }
            }
        }
        if (isOver) {
            break;
        }
    }

}
solve(["6", "7", "5", "6"])