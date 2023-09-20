function celsiusToFarenheit(input){
    let celsius = Number(input[0]);
    let farenheit = celsius * 9 / 5 + 32;

    console.log(farenheit.toFixed(2));
}
celsiusToFarenheit(["25"])