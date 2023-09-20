function oldBook(input) {
    let book = input[0];
    let index = 1;
    let currentBook = input[index];

    let bookCounter = 0;
    let isFound = false;
    while (currentBook !== "No More Books") {
        index++;

        if (currentBook === book) {
            isFound = true;
            console.log(`You checked ${bookCounter} books and found it.`);
            break;
        }
        currentBook = input[index];
        bookCounter++;
    }
    if (!isFound) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`);
    }
}
oldBook(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
