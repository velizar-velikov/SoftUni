function solve(input) {
 
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
 
    let n1 = false;
    let n2 = false;
    let n3 = false;
    let n4 = false;
 
    let buff = "";
    let index = 0;
 
    for (let i = startInterval; i <= endInterval; i++) {
        let numAsString = String(i);
        let fullNum = "";
        index = 0;
        n1 = false;
        n2 = false;
        n3 = false;
        n4 = false;
        for (let n = 1; n <= numAsString.length; n++) {
            let oneNum = numAsString[index];
            index++;
 
            if (index === 1 && oneNum % 2 !== 0) {
                n1 = true;
                fullNum += oneNum;
            } else if (index === 2 && oneNum % 2 !== 0) {
                n2 = true;
                fullNum += oneNum;
            } else if (index === 3 && oneNum % 2 !== 0) {
                n3 = true;
                fullNum += oneNum;
            } else if (index === 4 && oneNum % 2 !== 0) {
                n4 = true;
                fullNum += oneNum;
            }
 
            if (n1 && n2 && n3 && n4) {
                index = 0;
                buff += fullNum + " ";
                fullNum = "";
                n1 = false;
                n2 = false;
                n3 = false;
                n4 = false;
            }
        }
    }
 
    console.log(buff);
 
}
 
(["2345",
"6789"])
