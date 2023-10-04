function rounding(num, precision) {
    if (precision > 15) {
        precision = 15;
    } else {
        num = parseFloat(num.toFixed(precision));
    }
    console.log(num);
}
rounding(10.5000, 3)