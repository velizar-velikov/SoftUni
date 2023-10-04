function binaryToDecimal(binary) {
    binary = binary.toString();
    let decimal = parseInt(binary, 2);
    console.log(decimal);
}
binaryToDecimal(11110000)