function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let time = Number(input[3]);

    let materialsPrice = (nylon + 2) * 1.50 + paint * 1.10 * 14.50 + thinner * 5.00 + 0.40;
    let labourPrice = 0.30 * time * materialsPrice;
    let allExpenses = materialsPrice + labourPrice;

    console.log(allExpenses);
}
repainting(["10 ","11 ","4 ","8 "])