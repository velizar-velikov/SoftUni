function petShop(input){
    let dogFoodPackages = Number(input[0]);
    let catFoodPackages = Number(input[1]);
    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;
    let product = dogFoodPackages * dogFoodPrice + catFoodPackages * catFoodPrice;
    
    console.log(product);
    }
    petShop([5], [7])
  