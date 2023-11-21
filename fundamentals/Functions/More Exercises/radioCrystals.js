function radioCrystals(arr) {
    let desiredThickness = arr[0];
    let toFinish = false;

    let operations = ['Cut', 'Lap', 'Grind', 'Etch', 'X-ray']
    for (let i = 1; i < arr.length; i++) {
        let currentCrystalThickness = arr[i];
        console.log(`Processing chunk ${currentCrystalThickness} microns`);
        let operation = '';
        let operationInaRow = 1;
        let numberOperations = 1;
        let crystalReady = false;

        while (!crystalReady) {
            currentCrystalThickness = decreaseThikness(currentCrystalThickness);
            let nextOperation = '';
            getNextOperation(currentCrystalThickness);
            countOrPrintOperation(operation);
            if (toFinish) return;
            numberOperations = operationInaRow;

            function decreaseThikness(currentCrystalThickness) {
                if (1 / 4 * currentCrystalThickness + 1 >= desiredThickness) {
                    currentCrystalThickness *= 1 / 4;
                    operation = operations[0];
                } else if (0.8 * currentCrystalThickness + 1 >= desiredThickness) {
                    currentCrystalThickness *= 0.8;
                    operation = operations[1];
                } else if (currentCrystalThickness - 20 + 1 >= desiredThickness) {
                    currentCrystalThickness -= 20;
                    operation = operations[2];
                } else if (currentCrystalThickness - 2 + 1 >= desiredThickness) {
                    currentCrystalThickness -= 2;
                    operation = operations[3];
                } else if (currentCrystalThickness + 1 == desiredThickness) {
                    currentCrystalThickness += 1;
                    operation = operations[4];
                }
                return currentCrystalThickness;
            }

            function getNextOperation(currentCrystalThickness) {
                if (1 / 4 * currentCrystalThickness + 1 >= desiredThickness) {
                    nextOperation = operations[0];
                } else if (0.8 * currentCrystalThickness + 1 >= desiredThickness) {
                    nextOperation = operations[1];
                } else if (currentCrystalThickness - 20 + 1 >= desiredThickness) {
                    nextOperation = operations[2];
                } else if (currentCrystalThickness - 2 + 1 >= desiredThickness) {
                    nextOperation = operations[3];
                } else if (currentCrystalThickness + 1 == desiredThickness) {
                    nextOperation = operations[4];
                }
                return nextOperation;
            }

            function countOrPrintOperation(operation) {
                if (nextOperation == operation) {
                    operationInaRow++;
                } else {
                    operationInaRow = 1;
                    console.log(`${operation} x${numberOperations}`);
                }
                if (operationInaRow == 1 && operation !== 'X-ray') {
                    currentCrystalThickness = Math.floor(currentCrystalThickness);
                    console.log('Transporting and washing');
                }
                if (currentCrystalThickness == desiredThickness) {
                    console.log(`Finished crystal ${desiredThickness} microns`);
                    crystalReady = true;
                    if (i == arr.length - 1) {
                        toFinish = true;
                        return;
                    }
                }
                return operationInaRow;
            }
        }
    }
}
// radioCrystals([1000, 4000, 8100])

radioCrystals([1375, 50000])

