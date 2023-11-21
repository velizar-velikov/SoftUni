function bookShelf(input) {
    let shelves = {};

    for (let info of input) {
        if (info.includes(' -> ')) {
            let [shelfId, shelfGenre] = info.split(' -> ');
            if (!shelves.hasOwnProperty(shelfId)) {
                shelves[shelfId] = {};
                shelves[shelfId]['genre'] = shelfGenre;
                shelves[shelfId]['books'] = {};
            }
        } else if (info.includes(': ')) {
            let [bookTitle, tokens] = info.split(': ');
            let [bookAuthor, bookGenre] = tokens.split(', ');
            for (let id in shelves) {
                if (shelves[id]['genre'] === bookGenre) {
                    shelves[id]['books'][bookTitle] = bookAuthor;
                }
            }
        }
    }

    let sortedShelvesEntries = Object.entries(shelves).sort((a, b) => Object.keys(b[1]['books']).length - Object.keys(a[1]['books']).length);

    sortedShelvesEntries.forEach(shelfEntry => {
        let [shelfId, values] = shelfEntry;
        console.log(`${shelfId} ${shelves[shelfId]['genre']}: ${Object.keys(shelves[shelfId]['books']).length}`);
        let books = shelves[shelfId]['books'];
        let sortedBooksEntries = Object.entries(books).sort((a, b) => a[0] - b[0]);
        sortedBooksEntries.forEach(bookEntry => console.log(`--> ${bookEntry[0]}: ${bookEntry[1]}`));
    });
}
// bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi',
//  'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi',
//   'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance',
//    'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])

bookShelf(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi'])