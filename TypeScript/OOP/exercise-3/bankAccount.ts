class BankAccount {
    private static _idCounter = 0;
    private _balance = 0;
    private static _interestRate = 0.02;
    private _id: number;

    constructor() {
        BankAccount._idCounter++;
        this._id = BankAccount._idCounter;
    }

    static setInterestRate(interest: number) {
        this._interestRate = interest;
    }

    getInterestRate() {
        return BankAccount._interestRate;
    }

    deposit(amount: number) {
        this._balance += amount;
    }

    getAccountId() {
        return this._id;
    }

    getBalance() {
        return this._balance;
    }
}

interface bankAccountHandlerObject {
    create: () => BankAccount;
    deposit: (account: BankAccount, amount: number) => void;
    setInterest: (interest: number) => void;
    getInterest: (account: BankAccount, years: number) => number;
}

interface AccountManager {
    create: () => void;
    deposit: (commandInfoItems: string[]) => void;
    setInterest: (commandInfoItems: string[]) => void;
    getInterest: (commandInfoItems: string[]) => void;
    end: () => void;
}

const commands: bankAccountHandlerObject = {
    create() {
        return new BankAccount();
    },
    deposit(account: BankAccount, amount: number) {
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

const accounts: BankAccount[] = [];

const accountManager: AccountManager = {
    create() {
        const account = commands.create();
        accounts.push(account);
        console.log(`Account ID${account.getAccountId()} created.`);
    },
    deposit(commandInfoItems: string[]) {
        const id: number = Number(commandInfoItems[1]);
        const amount: number = Number(commandInfoItems[2]);

        const account = accounts.find((account) => account.getAccountId() === id);
        if (!account) {
            console.log('Account does not exist!');
        } else {
            commands.deposit(account, amount);
            console.log(`Deposited ${amount} to ID${account.getAccountId()}`);
        }
    },
    setInterest(commandInfoItems: string[]) {
        const interest: number = Number(commandInfoItems[1]);
        commands.setInterest(interest);
    },
    getInterest(commandInfoItems: string[]) {
        const id: number = Number(commandInfoItems[1]);
        const years: number = Number(commandInfoItems[2]);
        const account = accounts.find((account) => account.getAccountId() === id);
        if (!account) {
            console.log('Account does not exist!');
        } else {
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

function manageAccounts(commandInfo: string) {
    const commandInfoItems: string[] = commandInfo.split(' ');
    const command: string = commandInfoItems[0];
    const commandCammelCase: string = command[0].toLowerCase() + command.slice(1);

    accountManager[commandCammelCase](commandInfoItems);
}
