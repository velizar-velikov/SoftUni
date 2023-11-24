function emojiDetector([input]) {
    let threshold = input.match(/\d/g)
        .map(Number)
        .reduce((acc, num) => acc * num);
    console.log(`Cool threshold: ${threshold}`);

    let pattern = /([:*])\1[A-Z][a-z]{2,}\1\1/g;
    let emojis = input.match(pattern);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    emojis.filter(emoji => {
        emoji = emoji.slice(2, emoji.length - 2);
        if (emoji.split('').reduce((acc, char) => acc + char.charCodeAt(), 0) > threshold) {
            return emoji;
        }

    })
        .forEach(emoji => console.log(emoji));
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])

// emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])

// emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])