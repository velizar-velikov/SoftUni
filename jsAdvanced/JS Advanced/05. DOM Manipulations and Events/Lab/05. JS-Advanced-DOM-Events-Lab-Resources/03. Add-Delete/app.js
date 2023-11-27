function addItem() {
    let input = document.getElementById('newItemText');
    let inputText = input.value;
    let newLi = document.createElement('li');
    newLi.textContent = inputText;
    let deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    deleteBtn.addEventListener('click', deleteItem);
    newLi.appendChild(deleteBtn);
    let list = document.getElementById('items');
    list.appendChild(newLi);
    input.value = '';

    function deleteItem() {
        newLi.remove();
    }
}