function sortAnArrayByTwoCriteria(input) {
    input.sort((a, b) => a.length - b.length == 0 ? a.localeCompare(b) : a.length - b.length);
    console.log(input.join('\n'));
}
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])