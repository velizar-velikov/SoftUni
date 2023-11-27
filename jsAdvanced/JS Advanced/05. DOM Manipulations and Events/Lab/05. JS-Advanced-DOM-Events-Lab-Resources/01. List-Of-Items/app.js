function addItem() {
    let input = document.getElementById('newItemText');
    let inputText = input.value;
    let newLi = document.createElement('li');
    newLi.textContent = inputText;
    let list = document.getElementById('items');
    list.appendChild(newLi);
    input.value = '';
}