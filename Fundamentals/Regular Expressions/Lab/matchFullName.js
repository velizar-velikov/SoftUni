function solve(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let match = pattern.exec(input);
    let validNames = [];

    while (match !== null) {
        validNames.push(match);
        match = pattern.exec(input);
    }
    console.log(validNames.join(' '));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")