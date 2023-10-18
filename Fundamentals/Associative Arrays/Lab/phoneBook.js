function storeInfoInPhoneBook(input) {
    let phoneBook = new Object();
    for (let i = 0; i < input.length; i++) {
        let [name, phoneNumber] = input[i].split(' ');
        phoneBook[name] = phoneNumber;
    }
    for (let [name, phoneNumber] of Object.entries(phoneBook)) {
        console.log(`${name} -> ${phoneNumber}`);
    }
}
storeInfoInPhoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'])