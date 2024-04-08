class Animal {
    furr;
    _weight;
    static legs = 4;
    voice;
    constructor(furr, voice, weight) {
        this.furr = furr;
        this.voice = voice;
        this.weight = weight;
    }
    get weight() {
        return this._weight;
    }
    set weight(newWeight) {
        this._weight = newWeight;
    }
    getWeightByLeg() {
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
//# sourceMappingURL=test.js.map