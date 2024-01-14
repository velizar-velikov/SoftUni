function addRemoveEls(commands) {
    const nums = [];
    let numToAdd = 1;
    commands.forEach(command => {
        if (command === 'add') {
            nums.push(numToAdd);
        } else if (command === 'remove') {
            nums.pop();
        }
        numToAdd++;
    })
    if (nums.length > 0) {
        console.log(nums.join('\n'));
    } else {
        console.log('Empty');
    }
}
addRemoveEls(['remove',
    'remove',
    'remove'])