function solve() {

    const input = document.getElementById('input');
    const selectTo = document.getElementById('selectMenuTo');
    const resultEl = document.getElementById('result');

    addOptions(selectTo);
    document.querySelector('button').addEventListener('click', onConvert);

    function onConvert() {
        const selectedOption = Array.from(document.querySelectorAll('#selectMenuTo option'))
            .find(option => option.selected);
        resultEl.value = parseNum(Number(input.value), selectedOption.getAttribute('value'));
    }

    function parseNum(num, type) {
        return type == 'binary' ?
            num.toString(2) :
            num.toString(16).toUpperCase();
    }

    function addOptions(selectTo) {
        const option1 = document.createElement('option');
        option1.value = 'binary';
        option1.textContent = 'Binary';
        const option2 = document.createElement('option');
        option2.value = 'hexadecimal';
        option2.textContent = 'Hexadecimal';
        selectTo.innerHTML = '';
        selectTo.appendChild(option1);
        selectTo.appendChild(option2);
    }
}