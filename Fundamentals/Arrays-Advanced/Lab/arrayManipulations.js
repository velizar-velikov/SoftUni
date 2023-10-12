function arrayManipulations(input) {
    let arr = input.shift().split(' ').map(Number);

    while (input.length > 0) {
        let tokens = input.shift().split(' ');
        let operation = tokens[0];
        let num = Number(tokens[1]);
        manipulateArr(operation);

        function manipulateArr(operation) {
            let index = 0;
            switch (operation) {
                case 'Add':
                    arr.push(num);
                    break;
                case 'Remove':
                    removeNum(num);
                    break;
                case 'RemoveAt':
                    index = num;
                    arr.splice(index, 1);
                    break;
                case 'Insert':
                    index = Number(tokens[2]);
                    arr.splice(index, 0, num);
                    break;

            }
        }
        function removeNum(num) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == num) {
                    arr.splice(i, 1);
                    i--;
                }
            }
        }
    }
    console.log(arr.join(' '));
}
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2'])