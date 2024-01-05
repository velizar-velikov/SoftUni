function playingCards(face, suit) {

    let validCardFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validCardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    if (!validCardFace.includes(face)) {
        throw new Error('Invalid card face');
    }

    return {
        face,
        suit,
        toString() {
            console.log(face + validCardSuits[suit]);
        }
    }
}

let cardObj = playingCards('10', 'H');
cardObj.toString();

// playingCards('1', 'C')