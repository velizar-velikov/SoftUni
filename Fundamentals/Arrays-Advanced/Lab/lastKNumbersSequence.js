function lastKNumbersSequence(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let start = 0;
        if (i > k) {
            start = i - k;
        }
        let newEl = 0;
        for (let j = start; j < i; j++) {
            newEl += result[j];
        }
        result.push(newEl);
    }
    console.log(result.join(' '));
}
lastKNumbersSequence(6, 3)