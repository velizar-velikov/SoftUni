function vacation(group, type, day) {
    let singlePrice = 0;
    if (type == 'Students') {
        switch (day) {
            case 'Friday':
                singlePrice = 8.45;
                break;
            case 'Saturday':
                singlePrice = 9.80;
                break;
            case 'Sunday':
                singlePrice = 10.46;
                break;
        }
    } else if (type == 'Business') {
        switch (day) {
            case 'Friday':
                singlePrice = 10.90;
                break;
            case 'Saturday':
                singlePrice = 15.60;
                break;
            case 'Sunday':
                singlePrice = 16;
                break;
        }
    } else if (type == 'Regular') {
        switch (day) {
            case 'Friday':
                singlePrice = 15;
                break;
            case 'Saturday':
                singlePrice = 20;
                break;
            case 'Sunday':
                singlePrice = 22.50;
                break;
        }
    }
    let price = singlePrice * group;

    if (type == 'Students' && group >= 30) {
        price *= 0.85;
    } else if (type == 'Business' && group >= 100) {
        price -= 10 * singlePrice;
    } else if (type == 'Regular' && group >= 10 && group <= 20) {
        price *= 0.95;
    }
    console.log('Total price: ' + price.toFixed(2));
}
vacation(40,
    "Regular",
    "Saturday")