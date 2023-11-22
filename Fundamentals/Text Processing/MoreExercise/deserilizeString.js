function deserilizeString(input) {
    let str = [];
    let command = input.shift();
    while (command !== 'end') {
        let [char, indexesStr] = command.split(':');
        let indexes = indexesStr.split('/')
            .map(Number)
            .forEach(index => str[index] = char);
        command = input.shift();
    }
    console.log(str.join(''));
}

// deserilizeString(['a:0/2/4/6',
// 'b:1/3/5',
// 'end'])

deserilizeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'])