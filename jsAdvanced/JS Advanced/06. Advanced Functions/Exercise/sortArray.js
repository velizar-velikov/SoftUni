function sortArray(nums, sortMethod) {
    let methods = {
        'asc': arr => arr = arr.sort((a, b) => a - b),
        'desc': arr => arr = arr.sort((a, b) => b - a)
    }
    return methods[sortMethod](nums);
}

// console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));