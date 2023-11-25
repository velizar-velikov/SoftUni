function sumTable() {
    let table = document.querySelectorAll('table tr');
    let sum = 0;
    for(let i = 1; i < table.length; i++) {
        let cells = table[i].children;
        let price = cells[cells.length - 1].textContent;
        sum += Number(price);
    }
    document.getElementById('sum').textContent = sum;
}