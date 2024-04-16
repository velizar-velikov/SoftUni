/// <reference  path="Deliveries.ts"/>

interface Customer {
    customerName: string;
    visited: boolean;
}
class Courier implements FoodAndBeverages.Delivery {
    protected placesToVisit: Customer[];
    constructor(placesToVisit: Customer[]) {
        this.placesToVisit = placesToVisit;
    }

    newCustomer(customerName: string, visited: boolean = false) {
        const customer = this._findCustomer(customerName);
        if (customer) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }

        this.placesToVisit.push({
            customerName,
            visited,
        });
        return `${customerName} just became your client`;
    }

    visitCustomer(customerName: string) {
        const customer = this._findCustomer(customerName);
        if (!customer) {
            throw new Error(`${customerName} is not your customer`);
        }

        customer.visited = true;
        return `Customer ${customerName} visited.`;
    }

    showCustomers(): string {
        let message = '';
        for (const customer of this.placesToVisit) {
            message += `\n${customer.customerName} -> ${customer.visited}`;
        }
        return message;
    }

    private _findCustomer(customerName: string): Customer | undefined {
        return this.placesToVisit.find((customer) => customer.customerName === customerName);
    }
}

let courier = new Courier([{ customerName: 'DHL', visited: false }]);

courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');

courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');

console.log(courier.showCustomers());
