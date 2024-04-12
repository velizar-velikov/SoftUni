abstract class CreateAccount<T, V> {
    bankName: T;
    bankID: V;

    constructor(bankName: T, bankID: V) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}

class PersonalAccount extends CreateAccount<string, number> {
    readonly ownerName: string;
    money: number;
    recentTransactions: object;

    constructor(bankName: string, bankID: number, ownerName: string) {
        super(bankName, bankID);
        this.ownerName = ownerName;
        this.money = 0;
        this.recentTransactions = {};
    }

    deposit(amount: number) {
        this.money += amount;
    }

    expense(amount: number, expenseType: string) {
        if (this.money < 0 || this.money < amount) {
            throw new Error(`You cant make ${expenseType} transaction`);
        }
        this.money -= amount;
        if (this.recentTransactions.hasOwnProperty(expenseType)) {
            this.recentTransactions[expenseType] += amount;
        } else {
            this.recentTransactions[expenseType] = amount;
        }
    }

    showDetails(): string {
        let totalExpenses = 0;
        for (const amount of Object.values(this.recentTransactions)) {
            totalExpenses += amount;
        }
        let message = `Bank name: ${this.bankName}`;
        message += `\nBank ID: ${this.bankID}`;
        message += `\nOwner name: ${this.ownerName}`;
        message += `\nMoney: ${this.money}`;
        message += `\nMoney spent: ${totalExpenses}`;

        return message;
    }
}

let account2 = new PersonalAccount('Fibank', 100000, 'Petar Petrol');

account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');
console.log(account2.showDetails());
