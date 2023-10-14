function manipulateInventory(input) {
    let inventory = input.shift().split(', ');
    let command = input.shift();

    while (command != 'Craft!') {
        let tokens = command.split(' - ');
        let action = tokens[0];

        if (action == 'Collect') {
            let item = tokens[1];
            if (!inventory.includes(item)) inventory.push(item);
        } else if (action == 'Drop') {
            let item = tokens[1];
            let index = inventory.indexOf(item);
            if (index != -1) inventory.splice(index, 1);
        } else if (action == 'Combine Items') {
            let oldAndNewItems = tokens[1].split(':');
            let oldItem = oldAndNewItems[0];
            let newItem = oldAndNewItems[1];
            let index = inventory.indexOf(oldItem);
            if (index != -1) inventory.splice(index + 1, 0, newItem);
        } else if (action == 'Renew') {
            let item = tokens[1];
            let index = inventory.indexOf(item);
            if (index != -1) {
                let itemToChangePosition = inventory.splice(index, 1);
                inventory.push(itemToChangePosition);
            }
        }
        command = input.shift();
    }
    console.log(inventory.join(', '));
}
manipulateInventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])