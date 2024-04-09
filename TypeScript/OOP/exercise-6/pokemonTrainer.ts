export = {};

class Trainer {
    name: string;
    private _badgesCount: number;
    pokemons: Pokemon[];

    constructor(name: string) {
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
    addPokemon(pokemon: Pokemon) {
        this.pokemons.push(pokemon);
    }
    findPokemonByElement(element: string): Pokemon {
        const pokemon = this.pokemons.find((pokemon) => pokemon.element === element);
        return pokemon;
    }
    incrementBadgesCount() {
        this._badgesCount++;
    }
}

class Pokemon {
    name: string;
    element: string;
    health: number;

    constructor(name: string, element: string, health: number) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}

initialize(
    'Sam Blastoise Water 18',
    'Narry Pikachu Electricity 22',
    'John Kadabra Psychic 90',
    'Tournament',
    'Fire',
    'Electricity',
    'Fire',
    'End'
);

function initialize(...commands: string[]): void {
    let index = 0;
    let command = commands[index];
    index++;

    let trainers: Trainer[] = [];

    while (command !== 'Tournament') {
        const items: string[] = command.split(' ');
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

function manageCommands(trainers: Trainer[], pokemonElement: string): Trainer[] {
    trainers.forEach((trainer) => {
        const pokemonWithGivenElement = trainer.findPokemonByElement(pokemonElement);

        if (pokemonWithGivenElement) {
            trainer.incrementBadgesCount();
        } else {
            trainer.reducePokemonsHealth();
        }
    });

    return trainers;
}

function createPokemon(items: string[]): Pokemon {
    const pokemonName: string = items[1];
    const pokemonElement: string = items[2];
    const pokemonHealth: number = Number(items[3]);
    const pokemon = new Pokemon(pokemonName, pokemonElement, pokemonHealth);

    return pokemon;
}

function sortTrainersByBadgesCountDesc(trainers: Trainer[]): Trainer[] {
    trainers.sort((a, b) => b.badgesCount - a.badgesCount);
    return trainers;
}

function printTrainers(trainers: Trainer[]): void {
    trainers.forEach((trainer) => {
        console.log(`${trainer.name} ${trainer.badgesCount} ${trainer.pokemons.length}`);
    });
}

function findTrainerByName(trainers: Trainer[], trainerName: string): Trainer {
    const trainerObj = trainers.find((trainer) => trainer.name === trainerName);
    return trainerObj;
}
