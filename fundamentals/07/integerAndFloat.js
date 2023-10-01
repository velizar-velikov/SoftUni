function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    let isFloat = sum % 1 != 0;
    console.log(isFloat ? `${sum} - Float` : `${sum} - Integer`);
}
integerAndFloat(9, 100, 1.1)
integerAndFloat(100, 200, 303)