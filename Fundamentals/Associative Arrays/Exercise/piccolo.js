function piccolo(input) {
    let obj = {}
 
    for (let element of input) {
        let [direction, carNumber] = element.split(`, `)
        if (direction == `IN`) {
            if (!obj.hasOwnProperty(carNumber)) {
                obj[carNumber] = null
            }
        } else if (direction == `OUT`) {
            delete obj[carNumber]
        }
 
    }
 
    let sorted = Object.keys(obj)
    if (sorted.length >= 1) {
        sorted = sorted.sort()
        for (let element of sorted) {
            console.log(element)
        }
    } else {
        console.log(`Parking Lot is Empty`)
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])