function extract(content) {
    // let text = document.getElementById(content).textContent;
    let text = '    The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).'
    let matches = text.matchAll(/\((?<city>[^)]+)\)/g);
    let output = [];
    for(let match of matches) {
        output.push(match.groups.city);
    }
    return output.join('; ');
}

console.log(extract());