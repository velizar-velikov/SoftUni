function godzillaVsKong(input){
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let perPersonPrice = Number(input[2]);

    let decorPrice = 0.10 * budget;
    let clothing = extras * perPersonPrice;

    if(extras > 150){
        clothing *= 0.90;
    }
    let fullPrice = decorPrice + clothing;

    if(fullPrice > budget){
        console.log('Not enough money!');
        console.log(`Wingard needs ${(fullPrice - budget).toFixed(2)} leva more.`);
    } else{
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - fullPrice).toFixed(2)} leva left.`);
    }

}
godzillaVsKong(["20000",
"120",
"55.5"])

