/// <reference  path="Deliveries.ts"/>
var Courier = /** @class */ (function () {
    function Courier(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    Courier.prototype.newCustomer = function (customerName, visited) {
        if (visited === void 0) { visited = false; }
        var customer = this._findCustomer(customerName);
        if (customer) {
            throw new Error("".concat(customerName, " is already a customer of yours!"));
        }
        this.placesToVisit.push({
            customerName: customerName,
            visited: visited,
        });
        return "".concat(customerName, " just became your client");
    };
    Courier.prototype.visitCustomer = function (customerName) {
        var customer = this._findCustomer(customerName);
        if (!customer) {
            throw new Error("".concat(customerName, " is not your customer"));
        }
        customer.visited = true;
        return "Customer ".concat(customerName, " visited.");
    };
    Courier.prototype.showCustomers = function () {
        var message = '';
        for (var _i = 0, _a = this.placesToVisit; _i < _a.length; _i++) {
            var customer = _a[_i];
            message += "\n".concat(customer.customerName, " -> ").concat(customer.visited);
        }
        return message;
    };
    Courier.prototype._findCustomer = function (customerName) {
        return this.placesToVisit.find(function (customer) { return customer.customerName === customerName; });
    };
    return Courier;
}());
var courier = new Courier([{ customerName: 'DHL', visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
