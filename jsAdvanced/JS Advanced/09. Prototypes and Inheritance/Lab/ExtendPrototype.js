function extendPrototype(myClass) {
    myClass.prototype.species = 'Human';
    myClass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }

    return myClass;
}