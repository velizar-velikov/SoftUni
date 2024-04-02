const getBiggerhalf = (nums: number[]): number[] => {
    const sortedNums: number[] = nums.sort((a: number, b: number): number => a - b);
    return sortedNums.filter((num: number, i: number, self: number[]): boolean => i >= Math.floor(self.length / 2));
};

console.log(getBiggerhalf([4, 7, 2, 5]));
