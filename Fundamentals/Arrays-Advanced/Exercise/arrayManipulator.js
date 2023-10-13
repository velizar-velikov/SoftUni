function arrayManipulator(arr, tasks) {
    for (let item of tasks) {
        let tokens = item.split(' ');
        let operation = tokens[0];
        let index;
        let el;

        switch (operation) {
            case 'add':
                index = Number(tokens[1]);
                el = Number(tokens[2]);
                arr.splice(index, 0, el);
                break;
            case 'addMany':
                index = Number(tokens[1]);
                let numsToAdd = tokens.slice(2,).map(Number);
                for (let item of numsToAdd) {
                    arr.splice(index, 0, item);
                    index++;
                }
                break;
            case 'contains':
                el = Number(tokens[1]);
                console.log(arr.indexOf(el));
                break;
            case 'remove':
                index = Number(tokens[1]);
                arr.splice(index, 1);
                break;
            case 'shift':
                let positions = Number(tokens[1]);
                for (let j = 0; j < positions; j++) {
                    let elToRotate = arr.shift();
                    arr.push(elToRotate);
                }
                break;
            case 'sumPairs':
                let summedArray = [];
                for (let j = 0; j < arr.length; j += 2) {
                    if (j + 1 < arr.length) {
                        summedArray.push(arr[j] + arr[j + 1]);
                    } else {
                        summedArray.push(arr[j]);
                    }
                }
                arr = summedArray;
                break;
            case 'print':
                console.log(`[ ${arr.join(', ')} ]`);
        }
    }
}
arrayManipulator([1, 2, 3, 4, 5, 6, 6, 8, 9, 10, 11, 2],
    ['add 0 23', 'remove 0', 'add 0 15', 'contains 15', 'remove 0', 'contains 15', 'addMany 0 9 8 7', 'shift 1', 'shift 123', 'sumPairs', 'sumPairs', 'add 0 12', 'sumPairs', "print"])
    //expected output: [26, 61, 16]