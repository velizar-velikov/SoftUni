function addItem() {
    let newTextInput = document.getElementById('newItemText');
    let newValueInput = document.getElementById('newItemValue');
    let newOption = document.createElement('option');
    newOption.textContent = newTextInput.value;
    newOption.value = newValueInput.value;
    let select = document.getElementById('menu');
    select.appendChild(newOption);
    newTextInput.value = '';
    newValueInput.value = '';
}