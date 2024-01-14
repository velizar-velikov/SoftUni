//not solved
function orbit([width, height, x, y]) {

    //creating empty matrix
    const matrix = [];
    for (let i = 0; i < height; i++) {
        const innerArr = [];
        for (let j = 0; j < width; j++) {
            innerArr.push(null);
        }
        matrix.push(innerArr);
    }

    let num = 1;
    matrix[x][y] = num;
    num++;

    const edges = {
        'topleft': [x, y],
        'topright': [x, y],
        'bottomright': [x, y],
        'bottomleft': [x, y]
    }


    if (matrix[edges.topleft[0] - 1] != undefined
        && matrix[edges.topleft[0] - 1][edges.topleft[1] - 1] !== undefined) {
        edges.topleft[0]--;
        edges.topleft[1]--;
    }
    if (matrix[edges.topright[0] - 1] != undefined
        && matrix[edges.topright[0] - 1][edges.topright[1] + 1] !== undefined) {
        edges.topright[0]--;
        edges.topright[1]++;
    }
    if (matrix[edges.bottomright[0] + 1] != undefined
        && matrix[edges.bottomright[0] + 1][edges.bottomright[1] + 1] !== undefined) {
        edges.bottomright[0]++;
        edges.bottomright[1]++;
    }
    if (matrix[edges.bottomleft[0] + 1] != undefined
        && matrix[edges.bottomleft[0] + 1][edges.bottomleft[1] - 1] !== undefined) {
        edges.bottomleft[0]++;
        edges.bottomleft[1]--;
    }


    //upper side
    for (let i = edges.topleft[0]; i < edges.topright[0]; i++) {
        matrix[edges.topleft[1]][i] = num;
    }
    //right side
    for (let i = edges.topright[1] + 1; i < edges.bottomright[1]; i++) {
        matrix[edges.topright[0]][i] = num;
    }
    //bottom side
    for (let i = edges.bottomright[0] - 1; i > edges.bottomleft[0]; i--) {
        matrix[edges.bottomright[1]][i] = num;
    }
    //left side
    for (let i = edges.bottomleft[1] - 1; i > edges.topleft[1]; i--) {
        matrix[edges.bottomleft[0]][i] = num;
    }

    matrix.forEach(row => console.log(row))
}

orbit([5, 5, 2, 2])