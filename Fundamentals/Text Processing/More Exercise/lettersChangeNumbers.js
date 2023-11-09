function lettersChangeNumber(input) {
    let tokens = input.split(' ');

    let totalSum = 0;

    for (let str of tokens) {

        if (!str) continue;

        let letterOne = str[0];
        let letterTwo = str[str.length - 1];
        let num = Number(str.substring(1, str.length - 1));

        
        if (letterOne == letterOne.toUpperCase()) {
            let letterOnePosition = letterOne.charCodeAt(0) - 64;
            num /= letterOnePosition;
        } else {
            let letterOnePosition = letterOne.charCodeAt(0) - 96;
            num *= letterOnePosition;
        }

        if (letterTwo == letterTwo.toUpperCase()) {
            let letterTwoPosition = letterTwo.charCodeAt(0) - 64;
            num -= letterTwoPosition;
        } else {
            let letterTwoPosition = letterTwo.charCodeAt(0) - 96;
            num += letterTwoPosition;
        }

        totalSum += num;
    }

    console.log(totalSum.toFixed(2));

}
lettersChangeNumber('A12b s17G');

lettersChangeNumber('P34562Z q2576f   H456z')

lettersChangeNumber('a1A')