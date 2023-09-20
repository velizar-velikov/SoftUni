function barcodeGenerator(input) {
    let lowerBorder = input[0];
    let upperBorder = input[1];
    let buffMain = "";

    for (let a = Number(lowerBorder[0]); a <= Number(upperBorder[0]); a++) {
        
        let buffOne = "";
        if (a % 2 === 1) {
            a = String(a);
            buffOne += `${a}`;
        } else {
            continue;
        }
        for (let b = Number(lowerBorder[1]); b <= Number(upperBorder[1]); b++) {
            let buffTwo = "";
            if (b % 2 === 1) {
                b = String(b);
                buffTwo += `${buffOne}${b}`;
            } else {
                continue;
            }
            for (let c = Number(lowerBorder[2]); c <= Number(upperBorder[2]); c++) {
                let buffThree = "";
                if (c % 2 === 1) {
                    c = String(c);
                    buffThree += `${buffTwo}${c}`;
                } else {
                    continue;
                }
                for (let d = Number(lowerBorder[3]); d <= Number(upperBorder[3]); d++) {
                    let buffFour = "";
                    if (d % 2 === 1) {
                        d = String(d);
                        buffFour += `${buffThree}${d}`;
                        buffMain += `${buffFour} `;
                        buffFour = buffThree;
                        if (d >= Number(lowerBorder[3]) - 1) {
                            continue;
                        }
                    } else {
                        continue;
                    }
                }
            }
        }
    }
    console.log(buffMain)
}
barcodeGenerator(["2345",
    "6789"])