function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);

    let centimeterCapacity = length * width * height;
    let literCapacity = centimeterCapacity * 0.001
    let adjustedCapacity = literCapacity * ( 1- procent / 100);
    
    console.log(adjustedCapacity);
}
fishTank(["85", "75", "47", "17"])