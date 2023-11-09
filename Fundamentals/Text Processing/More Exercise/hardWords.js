function hardWords(input) {

    let text = input.shift();
    let arr = input.shift();

    let space = '';
    let filledText = text.slice(0,);

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char == '_') {
            space += char;

            if (text[i + 1] != '_') {
                let length = space.length;
                let correctWord = findCorrectWord(arr);
                filledText = filledText.replace(space, correctWord);
                space = '';

                function findCorrectWord(arr) {
                    for (let j = 0; j < arr.length; j++) {
                        if (arr[j].length == length) {
                            let correctWord = arr.splice(j, 1)[0];
                            return correctWord;
                        }
                    }
                }
            }

        }

    }

    console.log(filledText);
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])