function solution() {

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function (input) {
        let [command, ingredient, qty] = input.split(' ');
        if (command == 'restock') {
            ingredients[ingredient] += Number(qty);
        } else if (command == 'prepare') {
            let entries = Object.entries(recipes[ingredient]);

            for (const [type, needed] of entries) {
                if (ingredients[type] < needed * qty) {
                    return `Error: not enough ${type} in stock`;
                } else {
                    ingredients[type] -= needed * qty;
                }
            };

        } else if (command == 'report') {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
        return 'Success';
    }
}

//TESTING
let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));