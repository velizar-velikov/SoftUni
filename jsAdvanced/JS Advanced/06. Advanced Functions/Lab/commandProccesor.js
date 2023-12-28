function solution() {
    let internalString = '';
    return {
        append(string) {
            internalString += string;
        },
        removeStart(n) {
            internalString = internalString.substring(n);
        },
        removeEnd(n) {
            internalString = internalString.substring(0, internalString.length - n);
        },
        print() {
            console.log(internalString);
        }
    }
}


//TESTING
let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();