function addItem() {
    const newTextInput = document.getElementById('newItemText');
    const newValueInput = document.getElementById('newItemValue');
    const newOption = document.createElement('option');

    newOption.textContent = newTextInput.value;
    newOption.value = newValueInput.value;

    document.getElementById('menu').appendChild(newOption);
    newTextInput.value = '';
    newValueInput.value = '';
}