function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studio = 0;
    let apartment = 0;

    switch (month) {
        case "May":
        case "October":
            apartment = 65;
            studio = 50;
            if (nights > 7 && nights <= 14) {
                studio = 0.95 * studio;
            } else if (nights > 14) {
                studio = 0.70 * studio;
            } break;
        case "June":
        case "September":
            apartment = 68.70;
            studio = 75.20;
            if (nights > 14) {
                studio = 0.80 * studio;
            } break;
        case "July":
        case "August":
            apartment = 77;
            studio = 76;
            break;
    }
    if (nights > 14) {
        apartment = 0.90 * apartment;
    }

    let studioVacation = studio * nights;
    let apartmentVacation = apartment * nights;

    console.log(`Apartment: ${apartmentVacation.toFixed(2)} lv.`);
    console.log(`Studio: ${studioVacation.toFixed(2)} lv.`);
}
hotelRoom(["May",
"15"])