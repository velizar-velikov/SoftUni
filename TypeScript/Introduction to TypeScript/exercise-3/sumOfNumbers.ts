function sumOfNumbers(a: string, b: string): void {
    let sum: number = 0;
    for (let i = Number(a); i <= Number(b); i++) {
        sum += i;
    }

    console.log(sum);
}

sumOfNumbers('-8', '20');
