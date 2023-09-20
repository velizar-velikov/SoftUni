function specialNumber(input) {
    let n = Number(input[0]);
    let buff = "";

    for (let i = 1111; i <= 9999; i++) {
        let ch = String(i);
        let isSpecial = true;
        for (let a = 0; a < ch.length; a++) {
            let currentDivider = Number(ch[a]);
            if (n % currentDivider !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) {
            buff += ch + " ";
        }
    }
    console.log(buff);
}
specialNumber(["16"])