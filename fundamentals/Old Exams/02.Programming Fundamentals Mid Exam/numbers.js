function numbers(input) {
    let arr = input.split(' ');
    arr = strArrToNumArr()
    let avgNum = findAvgNum();
    let topNums = findTopNums();
    // topNums.sort((a, b) => b - a);

    if (topNums.length == 0) {
        console.log('No');
    } else {
        console.log(topNums.join(' '));
    }

    function strArrToNumArr() {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Number(arr[i]);
        }
        return arr;
    }

    function findAvgNum() {
        let sum = 0;
        for (let num of arr) {
            sum += num;
        }
        return sum / arr.length;
    }

    function findTopNums() {
        let topNums = [];
        for (let num of arr) {
            if (num > avgNum) {
                topNums.push(num);
            }
        }
        if (topNums.length > 5) {
            topNums.sort((a, b) => b - a);
            topNums.length = 5;
        }
        return topNums;
    }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')