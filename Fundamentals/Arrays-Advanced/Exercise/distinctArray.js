function distinctArray(ints) {
    for (let i = 0; i < ints.length; i++) {
        for (let j = 0; j < ints.length; j++) {
            if (j == i) continue;
            if (ints[j] == ints[i]) {
                ints.splice(j, 1);
                j--;
            }
        }
    }
    console.log(ints.join(' '));
}
distinctArray([1, 2, 3, 4, 1, 1, 1, 1, 1])