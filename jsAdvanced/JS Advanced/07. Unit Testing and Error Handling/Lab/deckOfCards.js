function deckOfCards(cards) {

    let validCardFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validCardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    let filteredCards = cards.filter(card => {
        let face = card.substring(0, card.length - 1);
        if (validCardFace.includes(face)) {
            return card;
        } else {
            console.log(`Invalid card: ${card}`);
        }
    });
    if (filteredCards.length === cards.length) {

        let output = filteredCards.map(card => {
            card = card.substring(0, card.length - 1) + validCardSuits[card[card.length - 1]];
            return card;
        }).join(' ');

        console.log(output);
    }
}

deckOfCards(['AS', '10D', 'KH', '2C'])
deckOfCards(['5S', '3D', 'QD', '1C'])