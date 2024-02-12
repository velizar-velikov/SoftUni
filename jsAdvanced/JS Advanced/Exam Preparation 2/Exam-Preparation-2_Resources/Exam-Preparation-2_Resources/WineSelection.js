class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        this._checkForSpace();

        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        });
        this.space--;

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {

        if (this._findWineIndexByName(wineName) == -1) {
            throw new Error(`${wineName} is not in the cellar.`)
        }
        const wine = this.wines[this._findWineIndexByName(wineName)];
        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }
        wine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const index = this._findWineIndexByName(wineName);
        if (index == -1) {
            throw new Error('The wine, you\'re looking for, is not found.');
        }
        const wine = this.wines[this._findWineIndexByName(wineName)];
        if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines.splice(index, 1);

        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (wineType) {
            const index = this._findWineIndexByType(wineType);
            if (index == -1) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            const wine = this.wines[index];
            return `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`;
        } else {
            let output = `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.`;

            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            this.wines.forEach(wine => {
                output += `\n${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`;
            });
            return output;

        }
    }

    _findWineIndexByName(wineName) {
        return this.wines.findIndex(wine => wine.wineName == wineName);
    }

    _findWineIndexByType(wineType) {
        return this.wines.findIndex(wine => wine.wineType == wineType);
    }

    _checkForSpace() {
        if (this.space == 0) {
            throw new Error('Not enough space in the cellar.');
        }
    }
}

//Testing
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());