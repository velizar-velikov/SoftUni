function suppliesForSchool(input){
    let penPackages = Number(input[0]);
    let markersPackages = Number(input[1]);
    let cleanerLiters = Number(input[2]);
    let discount = Number(input[3] / 100);

    let standartPrice = penPackages * 5.80 + markersPackages * 7.20 + cleanerLiters * 1.20;
    let discountedPrice = standartPrice - standartPrice * discount;

    console.log(discountedPrice);
}
suppliesForSchool(["2 ","3 ","4 ","25 "])