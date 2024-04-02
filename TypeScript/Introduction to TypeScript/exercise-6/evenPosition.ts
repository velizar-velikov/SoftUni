function evenPosition(nums: string[]): void {
    const numsAtEvenPositions: string[] = nums.filter((num: string, i: number): boolean => i % 2 === 0);
    console.log(numsAtEvenPositions.join(' '));
}

evenPosition(['20', '30', '40', '50', '60']);
