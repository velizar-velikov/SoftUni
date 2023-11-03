function cardGame(input) {
    let peopleCards = {};
    for (let item of input) {
        let [name, tokens] = item.split(': ');
        let cards = tokens.split(', ');

        let cardSet = new Set(cards);
        cards = Array.from(cardSet);

        if (name in peopleCards) {
            for (let card of cards) {
                if (!peopleCards[name].includes(card)) {
                    peopleCards[name].push(card);
                }
            }
        } else {
            peopleCards[name] = cards;
        }
    }

    let peoplePoints = {};
    for (let [name, cards] of Object.entries(peopleCards)) {
        let points = 0;
        for (let card of cards) {

            let power = 0;
            let type = null;
            if (card.includes('10')) {
                power = 10;
                type = card[2];
            } else {
                power = card[0];
                type = card[1];
            }

            switch (power) {
                case 'J': power = 11; break;
                case 'Q': power = 12; break;
                case 'K': power = 13; break;
                case 'A': power = 14; break;
            }
            let multiplier = 0;
            switch (type) {
                case 'S': multiplier = 4; break;
                case 'H': multiplier = 3; break;
                case 'D': multiplier = 2; break;
                case 'C': multiplier = 1; break;
            }

            let cardPoints = power * multiplier;
            points += cardPoints;

        }

        if (name in peoplePoints) {
            peoplePoints[name] += points;
        } else {
            peoplePoints[name] = points;
        }
    }

    for (let [name, points] of Object.entries(peoplePoints)) {
        console.log(`${name}: ${points}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])