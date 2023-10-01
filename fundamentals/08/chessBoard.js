function chessBoard(n) {
    let html = 'div class="chessboard">\n';
    let count = 0;
    for (let i = 0; i < n; i++) {
        html += '  <div>\n';
        for (let j = 0; j < n; j++) {
            count++;
            let colour = count % 2 == 0 ? 'white' : 'black';
            html += `  <span class"${colour}"></span>\n`;
        }
        html += '  </div>\n';
    }
    html += '</div>';
    console.log(html);
}
chessBoard(3)