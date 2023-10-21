//опитай да създаваш промеливи с подходящи имена,
//за да може след това по-лесно да си търсиш грешката
//ако няма да използваш промелива няма нужда да я създаваш
//цялостно for циклите са излишни за тази задача
//защото е казано, че всеки търсен equipment го има максимум 1 път

function gladiatorInventory(arrStr) {
    let inventory = arrStr.shift().split(` `)


    for (let i = 0; i < arrStr.length; i++) {
        let command = arrStr[i];
        //ако напишеш arrStr[0], то няма как да преминеш на следваща команда
        let tokens = command.split(` `);
        //интерполацията се използва за динамичен текст, тоест променлива вътре,
        //ако нямаш такава в string-a, използвай ' ' или " " 
        let action = tokens[0];
        let equipment = tokens[1];

        if (action == "Buy") {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment)
            }

        } else if (action == "Trash") {
            for (let j = 0; j < inventory.length; j++) {
                // for цикълът трябва да има къдрави скоби,
                //иначе изпълнява само това на неговия ред; важи и за if
                if (inventory[j] == equipment) {
                    //няма нужда от Number[j], j вече е Number при създаване на цикъла
                    inventory.splice(j, 1);
                    j--;
                    //връщаме индекс назад, за да не пропуснем item, заради премахването
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
                    //тук беше сложила slice, вместо splice
                    inventory.splice(j + 1, 0, upgraded);
                    //тук добавяме upgraded като изцяло нов елемент след търсения от нас
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