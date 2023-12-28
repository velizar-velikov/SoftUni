function solve(...args) {
    let types = {};
    args.forEach(arg => {
        let type = typeof arg;

        if (!types[type]) {
            types[type] = [];
        }

        types[type].push(arg);
        console.log(`${type}: ${arg}`);
    });

    Object.entries(types)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(([type, args]) => console.log(`${type} = ${args.length}`));
}

// solve('cat', 42, function () { console.log('Hello world!'); })
solve({ name: 'bob' }, 3.333, { name: 'dodo' }, 9.999)
