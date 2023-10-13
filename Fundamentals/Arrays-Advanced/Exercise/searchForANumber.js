function searchForNumber(arr, specialArr) {
    let elementsToTake = specialArr.shift();
    let elementsToDelete = specialArr.shift();
    let elementToSearch = specialArr.shift();
    let takenArr = arr.slice(0, elementsToTake);
    takenArr.splice(0, elementsToDelete);
    let occuranceCount = 0;
    for (let item of takenArr) {
        if (item == elementToSearch) {
            occuranceCount++;
        }
    }
    console.log(`Number ${elementToSearch} occurs ${occuranceCount} times.`);
}
searchForNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])