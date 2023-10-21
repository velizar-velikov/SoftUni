function gladiatorInventory(arrStr) {
    let inventory = arrStr.shift().split(` `)


    for (let i = 0; i < arrStr.length; i++) {
        let command = arrStr[i];
        let tokens = command.split(` `);
        let action = tokens[0];
        let equipment = tokens[1];

        if (action == "Buy") {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment)
            }

        } else if (action == "Trash") {
            for (let j = 0; j < inventory.length; j++) {
                if (inventory[j] == equipment) {
                    inventory.splice(j, 1);
                    j--;
                }
            }

        } else if (action == "Repair") {
            for (let j = 0; j < inventory.length; j++) {
                if (inventory[j] == equipment) {
                    let repaired = inventory.splice(j, 1);
                    j--;
                    inventory.push(repaired[0]);
                    break;
                }
            }
        } else if (action == "Upgrade") {
            let item = equipment.split(`-`);
            let itemOne = item[0];
            for (let j = 0; j < inventory.length; j++) {
                if (inventory[j] == itemOne) {
                    let upgraded = item.join(':');
                    inventory.splice(j + 1, 0, upgraded);
                    break;
                }
            }

        }
    }
    console.log(inventory.join(` `))

}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])