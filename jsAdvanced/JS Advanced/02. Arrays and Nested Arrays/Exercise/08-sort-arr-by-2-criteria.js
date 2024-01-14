const sortArrByTwoCriteria = (arr) => console.log(
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
        .join('\n'));

sortArrByTwoCriteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])