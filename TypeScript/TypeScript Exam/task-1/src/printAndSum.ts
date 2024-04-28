function printAndSum(start: number, end: number): void {
    let sum: number = 0;
    let numbersAsString: string = '';
    for (let i = start; i <= end; i++) {
        numbersAsString += i + ' ';
        sum += i;
    }
    console.log(numbersAsString.trimEnd());
    console.log(`Sum: ${sum}`);
}

printAndSum(50, 60);
