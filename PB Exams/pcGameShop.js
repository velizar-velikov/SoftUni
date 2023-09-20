function pcGameShop(input){
    let num = Number(input[0]);
    let name = "";

    let hearthstoneCounter = 0;
    let forniteCounter = 0;
    let overwatchCounter = 0;

    for (let i = 1; i <= num; i++){
        name = input[i];
        switch (name){
            case "Hearthstone": hearthstoneCounter++; break;
            case "Fornite": forniteCounter++; break;
            case "Overwatch": overwatchCounter++; break;
        }
    }
    let others = num - hearthstoneCounter - forniteCounter - overwatchCounter;

    console.log(`Hearthstone - ${(hearthstoneCounter / num * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(forniteCounter / num * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCounter / num * 100).toFixed(2)}%`);
    console.log(`Others - ${(others / num * 100).toFixed(2)}%`);
}
pcGameShop([""])