function solution(num) {
    return nextNum => num + nextNum;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));