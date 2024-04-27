import { ClothType } from './Cloth';

export class Magazine {
    type: string;
    capacity: number;
    clothes: ClothType[];

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }

    addCloth(cloth: ClothType) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color: string): boolean {
        const clothIndex: number = this.clothes.findIndex((cloth) => cloth.color === color);
        if (clothIndex === -1) {
            return false;
        }
        this.clothes.splice(clothIndex, 1);
        return true;
    }
    getSmallestCloth(): ClothType {
        const smallestSizeCloth: ClothType = this.getSortedClothesBySize()[0];
        return smallestSizeCloth;
    }
    getCloth(color: string): ClothType | undefined {
        const cloth: ClothType | undefined = this.clothes.find((cloth) => cloth.color === color);
        return cloth;
    }
    getClothCount(): number {
        return this.clothes.length;
    }
    report(): string {
        let reportResult: string = `${this.type} magazine contains:`;
        const sortedClothesBySize = this.getSortedClothesBySize();
        sortedClothesBySize.forEach((cloth) => {
            reportResult += `\n` + cloth.toString();
        });
        return reportResult;
    }
    private getSortedClothesBySize(): ClothType[] {
        return this.clothes.sort((a, b) => a.size - b.size);
    }
}
