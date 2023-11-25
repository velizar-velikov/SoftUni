function extractText() {
    let items = document.querySelectorAll('#items li');
    let textarea = document.querySelector('#result');
    for(let item of items) {
        textarea.value += item.textContent + '\n';
    }
}