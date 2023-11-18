function arrayModifier(input) {
    let arr = input[0].split(' ');

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    let index = 1;
    let command = input[index];
    index++;

    let decrease = a => a - 1;
    let newArr = [];

    while (command != 'end') {
        let tokens = command.split(' ');
        let operation = tokens[0];
        let indexOne = Number(tokens[1]);
        let indexTwo = Number(tokens[2]);
       
        operate(operation);

        function operate(operation) {
            switch (operation) {
                case 'swap':
                    let elementAtIndexOne = arr[indexOne];
                    arr[indexOne] = arr[indexTwo];
                    arr[indexTwo] = elementAtIndexOne;
                    break;
                case 'multiply':
                    arr[indexOne] *= arr[indexTwo];
                    break;
                case 'decrease':
                    newArr = arr.map(a => a - 1);
                    arr = newArr;
                    break;
            }
        }

        command = input[index];
        index++;
    }
    console.log(arr.join(', '));
}
arrayModifier([
    '1 2 3 4',
    'multiply 3 2',
    'decrease',
    'decrease',
    'end'
  ])