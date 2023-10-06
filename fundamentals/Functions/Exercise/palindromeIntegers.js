let palindromeIntegers = arr => {
    for (let i = 0; i < arr.length; i++) {
        let isPalindrome = true;
        let curentNumAsString = String(arr[i]);
        for (let j = 0; j < curentNumAsString.length / 2; j++) {
            if (curentNumAsString[j] != curentNumAsString[curentNumAsString.length - 1 - j]) {
                isPalindrome = false;
            }
        }
        console.log(isPalindrome);
    }
}
palindromeIntegers([32, 2, 232, 1010])