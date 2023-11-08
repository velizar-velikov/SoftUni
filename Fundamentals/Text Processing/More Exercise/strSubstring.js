function checkTextForWord(wordSearch, text) {
    let words = text.split(' ');
    let isFound = false;
    for (let word of words) {
        if (word.toLowerCase() == wordSearch.toLowerCase()) {
            isFound = true;
            console.log(wordSearch);
            return;
        }
    }
    
    if (!isFound) {
        console.log(`${wordSearch} not found!`);
    }

checkTextForWord('javascript',
'JavaScript is the best programming language')
checkTextForWord('python',
'JavaScript is the best programming language')
    // това решение judge не го приема;
    // function checkTextForWord(word, text) {
    //     let index = text.toLowerCase().indexOf(word.toLowerCase());
    //     if (index === -1) {
    //         console.log(`${word} not found!`);
    //     } else {
    //         console.log(word);
    //     }
    // }
}