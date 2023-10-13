function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');

    while(input.length > 0) {
        let tokens = input.shift().split(' ');
        let command = tokens[0];

        if (command == 'Buy') {
            let equipment = tokens[1];
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        } else if (command == 'Trash') {
            let equipment = tokens[1];
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
            }
        } else if (command == 'Repair') {
            let equipment = tokens[1];
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                let equipmentToRepair = inventory.splice(index, 1);
                inventory.push(equipmentToRepair);
            }
        } else if (command == 'Upgrade') {
            let tokensOfEquipment = tokens[1].split('-');
            let equipment = tokensOfEquipment[0];
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                let upgradedEquipment = tokensOfEquipment.join(':');
                inventory.splice(index + 1, 0, upgradedEquipment);
            }
        }

    }
    console.log(inventory.join(' '));
}
// gladiatorInventory(['SWORD Shield Spear',
// 'Buy Bag',
// 'Trash Shield',
// 'Repair Spear',
// 'Upgrade SWORD-Steel'])
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])