function smallestOfThreeNumbers(intOne, intTwo, intThree) {
    let theSmallest = intOne;
    if (intTwo < theSmallest) {
        theSmallest = intTwo;
    }
    if (intThree < theSmallest) {
        theSmallest = intThree;
    }
    console.log(theSmallest);
}
smallestOfThreeNumbers(25, 21, 4)