function solve() {

    const checkBtn = document.querySelectorAll('button')[0];
    const clearBtn = document.querySelectorAll('button')[1];
    const rows = document.querySelectorAll('tbody tr');
    const resultEl = document.querySelector('#check p');
    const table = document.querySelector('table');
    const inputs = document.querySelectorAll('table tbody input[type="number"]')

    checkBtn.addEventListener('click', checkSudomu);
    clearBtn.addEventListener('click', getInitialState);

    function checkSudomu() {

        if (checkRows() && checkColumns()) {
            resultEl.textContent = 'You solve it! Congratulations!';
            resultEl.style.color = 'green';
            table.style.border = '2px solid green';
        } else {
            resultEl.textContent = 'NOP! You are not done yet...';
            resultEl.style.color = 'red';
            table.style.border = '2px solid red';
        }
    }

    function checkRows() {

        for (let i = 0; i < rows.length; i++) {
            const rowInputs = Array.from(rows[i].querySelectorAll('input[type="number"]')).map(rowInput => Number(rowInput.value));
            const uniqueValues = Array.from(new Set(rowInputs)).sort((a, b) => a - b);
            if (JSON.stringify(uniqueValues) != JSON.stringify([1, 2, 3])) {
                return false;
            }
        }
        return true;
    }

    function checkColumns() {
        for (let i = 0; i < rows.length; i++) {
            const columnInputs = [];
            for (let j = 0; j < rows.length; j++) {
                const inputValue = rows[j].querySelectorAll('input[type="number"]')[i].value;
                columnInputs.push(Number(inputValue));
            }
            columnInputs.sort((a, b) => a - b)
            const uniqueValues = Array.from(new Set(columnInputs));
            if (JSON.stringify(uniqueValues) != JSON.stringify([1, 2, 3])) {
                return false;
            }
        }
        return true;
    }

    function getInitialState() {
        Array.from(inputs).forEach(input => input.value = '');
        table.style.border = '';
        resultEl.textContent = '';
    }
}