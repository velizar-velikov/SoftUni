function solve(input) {
    let collection = [];
    return (function () {
        let processor = {
            add(str) {
                collection.push(str);
            },
            remove(str) {
                collection = collection.filter(item => item !== str);
            },
            print() {
                console.log(collection.join());
            }
        }
        input.forEach(str => {
            const [command, text] = str.split(' ');
            processor[command](text);
        })
    })();
}


//Arrow function in the object for fun
// function solve(input) {
//     let collection = [];

//     let processor = {
//         add: str => collection.push(str),
//         remove: str => collection = collection.filter(item => item !== str),
//         print: () => console.log(collection.join())
//     }

//     input.forEach(str => {
//         const [command, text] = str.split(' ');
//         processor[command](text);
//     })
// }

solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])