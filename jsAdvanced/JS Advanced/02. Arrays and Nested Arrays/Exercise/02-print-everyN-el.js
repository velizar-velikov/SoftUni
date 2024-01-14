const printEveryNEl = (arr, step) => arr.filter((x, i) => i % step == 0);

printEveryNEl(['dsa',
    'asd',
    'test',
    'tset'],
    2)