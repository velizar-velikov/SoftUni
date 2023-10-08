function theLift(input) {
    let people = Number(input[0]);
    let liftWagons = input[1].split(' ');

    if (people != 0) {

        for (let i = 0; i < liftWagons.length; i++) {
            let wagon = Number(liftWagons[i]);
            let emplySpots = 4 - wagon;
            let newPeopleOnTheWagon = 0;
            let newWagon = 0;
            if (people > emplySpots) {
                newPeopleOnTheWagon = emplySpots;
                newWagon = 4;
                people -= newPeopleOnTheWagon;
            } else if (people > 0) {
                newPeopleOnTheWagon = people;
                newWagon = people + wagon;
                people = 0;
            }
            newPeopleOnTheWagon = newPeopleOnTheWagon.toString();
            liftWagons.splice(i, 1, newWagon)
            if (people == 0) {
                break;
            }
        }

    }
    let isFull = true;
    for (let item of liftWagons) {
        if (item != 4) {
            isFull = false;
        }
    }

    if (isFull) {
        if (people > 0) {
            console.log(`There isn't enough space! ${people} people in a queue!`);
        }
    } else {
        console.log('The lift has empty spots!');
    }
    console.log(liftWagons.join(' '));

}
theLift(['0', '4 4 1 3'])