function loadingBar(number) {
    let str = '..........';
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    for (let i = 0; i < number / 10; i++) {
        arr[i] = '%';
    }
    if (number == 100) {
        console.log('100% Complete!');
        console.log(`[${arr.join('')}]`);
    } else {
        console.log(`${number}% [${arr.join('')}]`);
        console.log('Still loading...');
    }
}
loadingBar(100)