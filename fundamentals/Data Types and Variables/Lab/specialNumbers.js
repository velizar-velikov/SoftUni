function specialNumbers(n) {
    n = n.toString();
    for (let i = 1; i <= n; i++) {
        let isSpecial = false;
        let sum = 0;
        let iToString = i.toString();
        for (let j = 0; j < iToString.length; j++) {
            sum += Number(iToString[j]);
            if (sum == 5 || sum == 7 || sum == 11) {
                isSpecial = true;
                break;
            }
        }
        console.log(isSpecial ? `${i} -> True` : `${i} -> False`);
    }
}
specialNumbers(1.1)
//specialNumbers(20)
