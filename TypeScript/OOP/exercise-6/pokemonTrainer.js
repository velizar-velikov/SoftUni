"use strict";
class Trainer {
    name;
    _badgesCount;
    pokemons;
    constructor(name) {
        this.name = name;
        this._badgesCount = 0;
        this.pokemons = [];
    }
    get badgesCount() {
        return this._badgesCount;
    }
    reducePokemonsHealth() {
        this.pokemons.forEach((pokemon) => {
            pokemon.health -= 10;
            if (pokemon.health <= 0) {
                const pokemonIndex = this.pokemons.findIndex((pokemon) => pokemon.health <= 0);
                this.pokemons.splice(pokemonIndex, 1);
            }
        });
    }
    addPokemon(pokemon) {
        this.pokemons.push(pokemon);
    }
    findPokemonByElement(element) {
        const pokemon = this.pokemons.find((pokemon) => pokemon.element === element);
        return pokemon;
    }
    incrementBadgesCount() {
        this._badgesCount++;
    }
}
class Pokemon {
    name;
    element;
    health;
    constructor(name, element, health) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}
initialize('Sam Blastoise Water 18', 'Narry Pikachu Electricity 22', 'John Kadabra Psychic 90', 'Tournament', 'Fire', 'Electricity', 'Fire', 'End');
function initialize(...commands) {
    let index = 0;
    let command = commands[index];
    index++;
    let trainers = [];
    while (command !== 'Tournament') {
        const items = command.split(' ');
        const pokemon = createPokemon(items);
        const trainerName = items[0];
        let trainer = findTrainerByName(trainers, trainerName);
        if (!trainer) {
            trainer = new Trainer(trainerName);
            trainers.push(trainer);
        }
        trainer.addPokemon(pokemon);
        command = commands[index];
        index++;
    }
    command = commands[index];
    index++;
    while (command !== 'End') {
        const pokemonElement = command;
        trainers = manageCommands(trainers, pokemonElement);
        command = commands[index];
        index++;
    }
    const sortedTrainers = sortTrainersByBadgesCountDesc(trainers);
    printTrainers(sortedTrainers);
}
function manageCommands(trainers, pokemonElement) {
    trainers.forEach((trainer) => {
        const pokemonWithGivenElement = trainer.findPokemonByElement(pokemonElement);
        if (pokemonWithGivenElement) {
            trainer.incrementBadgesCount();
        }
        else {
            trainer.reducePokemonsHealth();
        }
    });
    return trainers;
}
function createPokemon(items) {
    const pokemonName = items[1];
    const pokemonElement = items[2];
    const pokemonHealth = Number(items[3]);
    const pokemon = new Pokemon(pokemonName, pokemonElement, pokemonHealth);
    return pokemon;
}
function sortTrainersByBadgesCountDesc(trainers) {
    trainers.sort((a, b) => b.badgesCount - a.badgesCount);
    return trainers;
}
function printTrainers(trainers) {
    trainers.forEach((trainer) => {
        console.log(`${trainer.name} ${trainer.badgesCount} ${trainer.pokemons.length}`);
    });
}
function findTrainerByName(trainers, trainerName) {
    const trainerObj = trainers.find((trainer) => trainer.name === trainerName);
    return trainerObj;
}
module.exports = {};
//# sourceMappingURL=pokemonTrainer.js.map