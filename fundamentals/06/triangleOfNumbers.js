function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        i += ' ';
        console.log(i.repeat(i));
    }
}
triangleOfNumbers()