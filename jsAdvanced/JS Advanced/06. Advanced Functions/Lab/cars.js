function solve(input) {
    const data = {};
    const processor = {
        create(name, inherits, name2) {
            data[name] = inherits ? Object.create(data[name2]) : {};
        },
        set(name, key, value) {
            data[name][key] = value;
        },
        print(name) {
            let result = [];
            for (const key in data[name]) {
                result.push(`${key}:${data[name][key]}`);
            }
            console.log(result.join(','));
        }
    }
    input.forEach(line => {
        let [command, name, item1, item2] = line.split(' ');
        processor[command](name, item1, item2);
    })
}

// function solve(input) {
//     const data = {}

//     const instr = {
//         create: (n, inherits, n2) =>
//             (data[n] = inherits ? Object.create(data[n2]) : {}),
//         set: (n, k, v) => (data[n][k] = v),
//         print: n => {
//             const entry = []
//             for (const key in data[n]) {
//                 entry.push(`${key}:${data[n][key]}`)
//             }
//             console.log(entry.join(", "))
//         },
//     }

//     input.forEach(x => {
//         const [c, n, k, v] = x.split(" ")

//         instr[c](n, k, v)
//     })
// }


solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])