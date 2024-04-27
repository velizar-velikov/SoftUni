"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const clothIndex = this.clothes.findIndex((cloth) => cloth.color === color);
        if (clothIndex === -1) {
            return false;
        }
        this.clothes.splice(clothIndex, 1);
        return true;
    }
    getSmallestCloth() {
        const smallestSizeCloth = this.getSortedClothesBySize()[0];
        return smallestSizeCloth;
    }
    getCloth(color) {
        const cloth = this.clothes.find((cloth) => cloth.color === color);
        return cloth;
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        let reportResult = `${this.type} magazine contains:`;
        const sortedClothesBySize = this.getSortedClothesBySize();
        sortedClothesBySize.forEach((cloth) => {
            reportResult += `\n` + cloth.toString();
        });
        return reportResult;
    }
    getSortedClothesBySize() {
        return this.clothes.sort((a, b) => a.size - b.size);
    }
}
exports.Magazine = Magazine;
