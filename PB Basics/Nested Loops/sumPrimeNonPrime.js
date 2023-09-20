function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (command !== "stop") {
        let isPrime = true;
        let num = Number(command);
        index++;
        command = input[index];
        if (num < 0) {
            console.log('Number is negative.');
            continue;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrime += num;
        } else {
            sumNonPrime += num;
        }
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])