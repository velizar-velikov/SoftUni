class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.listOfParticipants.find(participant => participant.name === name)) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.find(participant => participant.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        let index = this.listOfParticipants.findIndex(participant => participant.name == name);
        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        if (typeOfGame === 'WaterBalloonFights') {

            let player1 = this.listOfParticipants.find(participant => participant.name === participant1);
            let player2 = this.listOfParticipants.find(participant => participant.name === participant2);

            if (player1 == undefined || player2 == undefined) {
                throw new Error('Invalid entered name/s.');
            }
            if (player1.condition !== player2.condition) {
                throw new Error('Choose players with equal condition.');
            }

            let winner;
            if (player1.power > player2.power) {
                player1.wins += 1;
                winner = participant1;
            } else if (player2.power > player1.power) {
                player2.wins += 1;
                winner = participant2;
            }

            if (winner === undefined) {
                return 'There is no winner.';
            }
            return `The ${winner} is winner in the game ${typeOfGame}.`;

        } else if (typeOfGame === 'Battleship') {

            if (!this.listOfParticipants.find(participant => participant.name == participant1)) {
                throw new Error('Invalid entered name/s.');
            }
            let winnerOfGame = this.listOfParticipants.find(participant => participant.name === participant1);
            winnerOfGame.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;

        }
    }

    toString() {

        let output = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        return this.listOfParticipants.sort((a, b) => b.wins - a.wins)
            .reduce((acc, participant) => acc + `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`, output)
            .trimEnd();
    }
}


//Testing
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());