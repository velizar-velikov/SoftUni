function generateReport() {

    const rows = document.querySelectorAll('tbody tr');
    const output = [];

    for (let row of rows) {

        const tds = row.children;
        const obj = {};

        for (let i = 0; i < tds.length; i++) {

            const headCell = document.querySelectorAll('thead input')[i];
            if (headCell.checked) {
                obj[headCell.getAttribute('name')] = tds[i].textContent;
            }
        }
        if (Object.keys(obj).length > 0) {
            output.push(obj);
        }
    }
    if (output.length > 0) {
        document.getElementById('output').value = JSON.stringify(output);
    }
}