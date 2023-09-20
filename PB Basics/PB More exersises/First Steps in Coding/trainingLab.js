function trainingLab(input){
    let w = Number(input[0]);
    let h = Number(input[1]);
    
    let spacesNumber = parseInt ((w * 100 - 100) / 120) * parseInt( h * 100 / 70) - 3;

    console.log(spacesNumber);
    
}
trainingLab(["15", "8.9"])