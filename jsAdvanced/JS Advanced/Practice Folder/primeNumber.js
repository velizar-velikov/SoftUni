console.log(isPrimeNumber(12))

function isPrimeNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}