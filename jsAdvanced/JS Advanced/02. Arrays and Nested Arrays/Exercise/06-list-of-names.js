function listOfNames(names) {
    return names.sort((a, b) => a.localeCompare(b))
        .reduce((acc, val, i) => acc + `${i + 1}.${val}\n`, '').trimEnd();
}
const res = listOfNames(["John", "Bob", "Christina", "Ema"]);
console.log(res);