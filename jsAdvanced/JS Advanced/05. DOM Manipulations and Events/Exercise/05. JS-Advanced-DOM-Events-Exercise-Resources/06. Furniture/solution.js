function solve() {

    const input = document.querySelector('textarea');
    const outputTextarea = document.querySelector('textarea:last-of-type');
    const buttons = document.querySelectorAll('button');
    const generateBtn = buttons[0];
    const buyBtn = buttons[1];

    generateBtn.addEventListener('click', addRows);
    buyBtn.addEventListener('click', showShoppingInfo);

    function addRows() {

        const inputArr = JSON.parse(input.value);
        for (let obj of inputArr) {

            const tr = document.createElement('tr');
            tr.innerHTML = `
                          <td><img src="${obj.img}"></td>
                          <td><p>${obj.name}</p></td>
                          <td><p>${obj.price}</p></td>
                          <td><p>${obj.decFactor}</p></td>
                          <td><input type="checkbox" disabled /></td>`;

            document.querySelector('table tbody').appendChild(tr);
        }
        input.value = '';
        enableCheckboxes();
    }

    function enableCheckboxes() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        Array.from(checkboxes).forEach(checkbox => checkbox.disabled = false);
    }

    function showShoppingInfo() {
        const { furniture, totalPrice, totalDecFactor } = getShoppingInfo();

        let output = `Bought furniture: ${furniture.join(', ')}`;
        output += `\nTotal price: ${totalPrice.toFixed(2)}\n`;
        output += `Average decoration factor: ${totalDecFactor / furniture.length}`;
        outputTextarea.value = output;
    }

    function getShoppingInfo() {
        const trs = document.querySelectorAll('tbody tr');
        const furniture = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        for (let tr of trs) {
            if (tr.querySelector('input[type="checkbox"]').checked) {
                const paras = tr.querySelectorAll('p');
                furniture.push(paras[0].textContent);
                totalPrice += Number(paras[1].textContent);
                totalDecFactor += Number(paras[2].textContent);
            }
        }
        return { furniture, totalPrice, totalDecFactor };
    }
}