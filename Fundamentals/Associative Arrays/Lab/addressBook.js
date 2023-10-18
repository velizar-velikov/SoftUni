function createAddressBook(input) {
    let addressBook = {};
    for (let info of input) {
        let [name, address] = info.split(':');
        addressBook[name] = address;
    }
    let names = Object.keys(addressBook).sort();
    let sortedAddressBook = {};
    names.forEach(name => sortedAddressBook[name] = addressBook[name]);
    for (let [name, address] of Object.entries(sortedAddressBook)) {
        console.log(`${name} -> ${address}`);
    }
}
createAddressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])