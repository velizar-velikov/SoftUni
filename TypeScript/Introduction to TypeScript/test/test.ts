function test(myVar: string, secVar: number, third?: boolean): string {
    return `${myVar} is ${secVar} years old - ${third} ha-ha`;
}

const result = test('Velizar', 23, true);

console.log(result);
