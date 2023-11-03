function createListOfCompanyUsers(input) {

    let companyUsers = {};
    for (let info of input) {
        let [company, userID] = info.split(' -> ');
        if (companyUsers.hasOwnProperty(company)) {
            companyUsers[company].add(userID);
        } else {
            companyUsers[company] = new Set();
            companyUsers[company].add(userID);
        }
    }

    let sortedUsersEntries = Object.entries(companyUsers).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [company, users] of sortedUsersEntries) {
        console.log(company);
        users.forEach(user => console.log(`-- ${user}`));
    }

}
createListOfCompanyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])