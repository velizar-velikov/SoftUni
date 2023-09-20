function equalSumsEvenOddPosition(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);

    let buff = "";

    for (let i = startInterval; i <= endInterval; i++) {
        let ch = String(i);
        let sumEven = 0;
        let sumOdd = 0;
        for (let j = 0; j < ch.length; j++) {
            if (j % 2 === 0) {
                sumEven += Number(ch[j]);
            } else {
                sumOdd += Number(ch[j]);
            }
        }
        if (sumEven === sumOdd) {
            buff += i + " ";
        }
    }
    console.log(buff);
}
equalSumsEvenOddPosition(["123456",
    "124000"])
console.log('123464 123475 123486 123497 123530 123541 123552 123563 123574 123585 123596 123640 123651 123662 123673 123684 123695 123750 123761 123772 123783 123794 123860 123871 123882 123893 123970 123981 123992 ');