function pipesInPool(input){
    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let H = Number(input[3]);
   
    let litersP1 = P1 * H;
    let litersP2 = P2 * H;
    let allLiters = litersP1 + litersP2;

    let procentP1 = litersP1 / allLiters * 100;
    let procentP2 = litersP2 / allLiters * 100;
   
    if(V >= allLiters){
        let procentAll = allLiters / V * 100;
        console.log(`The pool is ${procentAll.toFixed(2)}% full. Pipe 1: ${procentP1.toFixed(2)}%. Pipe 2: ${procentP2.toFixed(2)}%.`);
    }else{
        console.log(`For ${H.toFixed(2)} hours the pool overflows with ${(allLiters - V).toFixed(2)} liters.`);
    }
}
pipesInPool(["100", "100", "100", "2.5"])