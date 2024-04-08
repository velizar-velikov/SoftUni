class Animal {
    public furr: string;
    private _weight: number;
    public static legs: number = 4;
    readonly voice: string;

    public constructor(furr: string, voice: string, weight: number) {
        this.furr = furr;
        this.voice = voice;
        this.weight = weight;
    }

    get weight() {
        return this._weight;
    }

    set weight(newWeight: number) {
        this._weight = newWeight;
    }

    protected getWeightByLeg() {
        return this._weight / Animal.legs;
    }

    getLegStrength() {
        return this.getWeightByLeg() * 12.2;
    }
}

const myAnimal = new Animal('thick', 'deep', 12);
const strength = myAnimal.getLegStrength();
console.log(strength);
console.log(myAnimal.voice);
