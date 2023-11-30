function solve() {
    let inputs = document.querySelectorAll('tbody input');
    let buttons = document.getElementsByTagName('button');
    let checkBtn = buttons[0];
    let clearBtn = buttons[1];
    let table = document.querySelector('table');
    let para = document.querySelector('#check p');

    checkBtn.addEventListener('click', checkInputs);
    clearBtn.addEventListener('click', clearInputs);

    function checkInputs() {
        let inputValuesArr = Array.from(inputs).map(input => input.value);
        let sums = [];
        let isInvalid = false;

        for (let i = 0; i < 3; i++) {
            let verticalSum = 0;
            let horSum = 0;
            let horSet = new Set();
            let verticalSet = new Set();
            for (let j = 0; j < 3; j++) {
                let horNum = Number(inputValuesArr[i * 3 + j]);
                let verticalNum = Number(inputValuesArr[i + j * 3]);
                horSum += horNum;
                verticalSum += verticalNum;
                horSet.add(horNum);
                verticalSet.add(verticalNum);
            }
            sums.push(horSum);
            sums.push(verticalSum);
            if (horSet.size !== 3 || verticalSet.size !== 3) {
                isInvalid = true;
            }
        }
        let firstSum = sums[0];
        if (inputValuesArr.includes('') || sums.some(sum => sum != firstSum)) {
            isInvalid = true;
        }
        if (isInvalid == false) {
            table.style.border = '2px solid green';
            para.textContent = 'You solve it! Congratulations!';
            para.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            para.textContent = 'NOP! You are not done yet...';
            para.style.color = 'red';
        }

    }
    function clearInputs() {
        for (let i = 0; i < 9; i++) {
            inputs[i].value = '';
        }
        table.style.border = 'initial';
        para.style.color = 'initial';
        para.textContent = '';
    }
}