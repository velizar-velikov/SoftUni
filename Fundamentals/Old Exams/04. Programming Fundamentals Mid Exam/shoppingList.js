function shoppingList(input) {
    let list = input.shift().split('!');
    let command = input.shift();

    while (command != 'Go Shopping!') {
        let tokens = command.split(' ');
        let typeOfItem = tokens[0];
        let item = tokens[1];
        switch (typeOfItem) {
            case 'Urgent':
                if (!list.includes(item)) {
                    list.unshift(item);
                }
                break;
            case 'Unnecessary':
                for (let i = 0; i < list.length; i++) {
                    if (item == list[i]) {
                        list.splice(i, 1);
                    }
                }
                break;
            case 'Correct':
                let newItem = tokens[2];
                for (let i = 0; i < list.length; i++) {
                    if (item == list[i]) {
                        list.splice(i, 1, newItem);
                    }
                }
                break;
            case 'Rearrange':
                for (let i = 0; i < list.length; i++) {
                    if (item == list[i]) {
                        let removedItem = list[i];
                        list.splice(i, 1);
                        list.push(removedItem);
                    }
                }
                break;
        }
        command = input.shift();
    }
    console.log(list.join(', '));
}
// shoppingList(["Tomatoes!Potatoes!Bread",
// "Unnecessary Milk",
// "Urgent Tomatoes",
// "Go Shopping!"])
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])