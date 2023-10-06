function charactersInRange(charOne, charTwo) {

    let myChars = [];
    let smallerCharNum = charOne.charCodeAt() > charTwo.charCodeAt() ? charTwo.charCodeAt() : charOne.charCodeAt();
    let biggerCharNum = charOne.charCodeAt() > charTwo.charCodeAt() ? charOne.charCodeAt() : charTwo.charCodeAt();

    for (let i = smallerCharNum + 1; i < biggerCharNum; i++) {
        myChars.push(String.fromCharCode(i));
    }

    console.log(myChars.join(' '));
}
charactersInRange('C',
    '#'
)