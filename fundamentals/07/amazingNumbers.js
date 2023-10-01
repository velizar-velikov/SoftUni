function amazingNumbers(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let amazing = sum.toString().includes('9');
    console.log(amazing ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amazingNumbers(1233)
amazingNumbers(999)
amazingNumbers(123)