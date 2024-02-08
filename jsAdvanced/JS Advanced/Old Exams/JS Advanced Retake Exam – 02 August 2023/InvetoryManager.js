class InventoryManager {

    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        this._validateQuantity(quantity);

        if (this.items.length == this.capacity) {
            throw new Error('The inventory is already full.');
        }
        const itemIndex = this.items.findIndex(item => item.name == itemName);
        if (itemIndex == -1) {
            this._addNewItem(itemName, quantity);
        } else {
            this.items[itemIndex].quantity += quantity;
        }
        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        this._validateQuantity(quantity);

        const itemIndex = this.items.findIndex(item => item.name == itemName);
        if (itemIndex == -1) {
            throw new ReferenceError(`The item ${itemName} is not available in the inventory.`);
        }
        if (this.items[itemIndex].quantity < quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }
        this.items[itemIndex].quantity -= quantity;
        if (this.items[itemIndex].quantity == 0) {
            this._handleOutOfStockItem(itemIndex);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        this._validateQuantity(quantity);

        const itemIndex = this.items.findIndex(item => item.name == itemName);
        if (itemIndex == -1) {
            this._addNewItem(itemName, quantity);
        } else {
            this.items[itemIndex].quantity += quantity;
        }
        const outOfStockItemIndex = this.outOfStock.findIndex(item => item == itemName);
        if (outOfStockItemIndex !== -1) {
            this.outOfStock.splice(outOfStockItemIndex, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let summary = 'Current Inventory:';
        this.items.forEach(item => summary += `\n${item.name}: ${item.quantity}`);

        if (this.outOfStock.length > 0) {
            summary += `\nOut of Stock: ${this.outOfStock.join(', ')}`;
        }
        return summary;
    }

    //helper methods
    _validateQuantity(quantity) {
        if (quantity <= 0) {
            throw new RangeError('Quantity must be greater than zero.');
        }
    }

    _addNewItem(name, quantity) {
        this.items.push({ name, quantity });
    }

    _handleOutOfStockItem(itemIndex) {
        this.outOfStock.push(this.items[itemIndex].name);
        this.items.splice(itemIndex, 1);
    }
}