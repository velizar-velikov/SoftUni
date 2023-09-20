function cinema(input){
let type = input[0];
let rolls = Number(input [1]);
let columns = Number(input[2]);

let seats = rolls * columns;
let income = 0;

switch(type){
    case "Premiere":
        income = seats * 12.00; 
        break;
    case "Normal":
        income = seats * 7.50;
        break;
    case "Discount":
        income = seats * 5.00;
        break;        
}
console.log(`${(income).toFixed(2)} leva`);
}
cinema(["Normal",
"21",
"13"])