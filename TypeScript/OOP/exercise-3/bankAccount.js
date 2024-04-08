class BankAccount {
    static _idCounter = 0;
    _balance = 0;
    static _interestRate = 0.02;
    _id;
    constructor() {
        BankAccount._idCounter++;
        this._id = BankAccount._idCounter;
    }
    static setInterestRate(interest) {
        this._interestRate = interest;
    }
    getInterestRate() {
        return BankAccount._interestRate;
    }
    deposit(amount) {
        this._balance += amount;
    }
    getAccountId() {
        return this._id;
    }
    getBalance() {
        return this._balance;
    }
}
const commands = {
    create() {
        return new BankAccount();
    },
    deposit(account, amount) {
        account.deposit(amount);
    },
    setInterest(interest) {
        BankAccount.setInterestRate(interest);
    },
    getInterest(account, years) {
        const rate = account.getInterestRate();
        const balance = account.getBalance();
        return Number((rate * balance * years).toFixed(2));
    },
};
const accounts = [];
const accountManager = {
    create() {
        const account = commands.create();
        accounts.push(account);
        console.log(`Account ID${account.getAccountId()} created.`);
    },
    deposit(commandInfoItems) {
        const id = Number(commandInfoItems[1]);
        const amount = Number(commandInfoItems[2]);
        const account = accounts.find((account) => account.getAccountId() === id);
        if (!account) {
            console.log('Account does not exist!');
        }
        else {
            commands.deposit(account, amount);
            console.log(`Deposited ${amount} to ID${account.getAccountId()}`);
        }
    },
    setInterest(commandInfoItems) {
        const interest = Number(commandInfoItems[1]);
        commands.setInterest(interest);
    },
    getInterest(commandInfoItems) {
        const id = Number(commandInfoItems[1]);
        const years = Number(commandInfoItems[2]);
        const account = accounts.find((account) => account.getAccountId() === id);
        if (!account) {
            console.log('Account does not exist!');
        }
        else {
            console.log(commands.getInterest(account, years));
        }
    },
    end() {
        return;
    },
};
manageAccounts('Create');
manageAccounts('Create');
manageAccounts('Deposit 1 20');
manageAccounts('Deposit 3 20');
manageAccounts('Deposit 2 10');
manageAccounts('SetInterest 1.5');
manageAccounts('GetInterest 1 1');
manageAccounts('GetInterest 2 1');
manageAccounts('GetInterest 3 1');
manageAccounts('End');
function manageAccounts(commandInfo) {
    const commandInfoItems = commandInfo.split(' ');
    const command = commandInfoItems[0];
    const commandCammelCase = command[0].toLowerCase() + command.slice(1);
    accountManager[commandCammelCase](commandInfoItems);
}
//# sourceMappingURL=bankAccount.js.map