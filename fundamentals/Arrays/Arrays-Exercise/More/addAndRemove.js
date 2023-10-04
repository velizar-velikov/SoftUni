function addAndRemove(arr) {
    let number = 1;
    let newArr = [];
    for (let command of arr) {
        command == 'add' ? newArr.push(number) : newArr.pop();
        number++;
    }
    if (newArr.length > 0) {
        console.log(newArr.join(' '));
    } else {
        console.log('Empty');
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add'])