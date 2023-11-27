function deleteByEmail() {
    let input = document.getElementsByName('email')[0];
    let email = input.value;
    let rows = document.querySelectorAll('table tbody tr');
    let result = document.getElementById('result');
    result.textContent = 'Not found.';
    for (let row of rows) {
        let rowEmail = row.children[1].textContent;
        if (rowEmail === email) {
            row.remove();
            result.textContent = 'Deleted.';
        }
    }
}