function oddOccurences(input) {
    let langs = input.split(' ');

    let langsMap = new Map();
    for (let lang of langs) {
        lang = lang.toLowerCase();
        if (langsMap.has(lang)) {
            let oldCount = langsMap.get(lang);
            let newCount = oldCount + 1;
            langsMap.set(lang, newCount);
        } else {
            langsMap.set(lang, 1);
        }
    }

    let entries = Object.entries(langsMap);

    let oddNumLang = [];

    for (let [lang, occurence] of langsMap) {
        if (occurence % 2 !== 0) {
            oddNumLang.push(lang);
        }
    }

    console.log(oddNumLang.join(' '));

}
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')