function jsonToHtml(str) {
    let arr = JSON.parse(str);
    let table = '<table>\n';
    table += '   <tr>';
    for (let i = 0; i < arr.length; i++) {
        let person = arr[i];
        if (i == 0) {
            for (let key of Object.keys(person)) {
                table += `<th>${key}</th>`;
            }
            table += `</tr>\n`;
        }
        table += `   <tr>`;
        for (let value of Object.values(person)) {
            table += `<td>${escape(value)}</td>`;
        }
        table += `</tr>\n`;
    }
    table += '</table>';
    console.log(table);
    function escape(value) {
        return value
          .toString()
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }
    
}

// jsonToHtml(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`)

jsonToHtml(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`)