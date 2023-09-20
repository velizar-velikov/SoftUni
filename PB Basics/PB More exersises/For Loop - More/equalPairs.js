// function equalPairs(input) {
//     let pairs = Number(input[0]);

//     let firstDigit = 0;
//     let secondDigit = 0;
//     let pairSum = 0;
//     let currentPairSum = 0;

//     let min = Number.MAX_SAFE_INTEGER;
//     let max = Number.MIN_SAFE_INTEGER;
//     let maxDiff = Number.MIN_SAFE_INTEGER;
//     let currentDiff = 0;


//     for (let i = 1; i <= pairs * 2; i++) {
//         firstDigit = Number(input[i]);
//         i++;
//         secondDigit = Number(input[i]);
//         currentPairSum = firstDigit + secondDigit;
//         pairSum += currentPairSum;


//         if (currentPairSum < min) {
//             min = currentPairSum;
//         }
//         if (currentPairSum > max) {
//             max = currentPairSum;
//         }

//         currentDiff = max - min;

//         if (i === 2 * pairs){
//             break;
//         }else {
//             i++;
//             firstDigit = Number(input[i]);
//             i++;
//             secondDigit = Number(input[i]);
//             let secondCurrentPairDiff = firstDigit + secondDigit;



//             while (secondCurrentPairDiff !== currentDiff){
//                 if ()
//                 continue;
//             }
//             if (secondCurrentPairDiff === currentDiff){
//                 console.log(`Yes, value=${firstDigit + secondDigit}`);
//             }
//         }

//     }

//     if (currentDiff !== secondCurrentPairDiff) {
//         console.log(`No, maxdiff=${maxDiff}`);
//     }
// }
// equalPairs(["4", "1", "92", "1", "3", "2", "2", "0", "0"])

function equalPairs(input) {
    let numberOfPairs = Number(input[0]);

    let firstDigit = 0;
    let secondDigit = 0;

    let firstPairSum = 0;
    let secondPairSum = 0;

    let maxDiff = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= 2 * numberOfPairs; i++) {
        //first pair
        firstDigit = Number(input[i]);
        i++;
        secondDigit = Number(input[i]);
        firstPairSum = firstDigit + secondDigit;

        //second pair
        i++

        if (i > 2* numberOfPairs){
            break;
        }
        firstDigit = Number(input[i]);
        i++;
        secondDigit = Number(input[i]);
        secondPairSum = firstDigit + secondDigit;

        //diff of the two pairs
        let pairsDiff = Math.abs(firstPairSum - secondPairSum);

        if (pairsDiff > maxDiff) {
            maxDiff = pairsDiff;
        }
    }
    if (maxDiff === 0) {
        console.log(`Yes, value=${firstPairSum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}
equalPairs(["3", "1", "3", "2", "2", "0", "4"])