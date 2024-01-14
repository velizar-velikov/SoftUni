function ticTacToe(input) {

    const dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    const [firstPlayerMark, secondPlayerMark] = ['X', 'O'];

    let isFirstPlayerTurn = true;
    for (let coords of input) {
        const [row, column] = coords.split(' ').map(Number);

        let freePlaces = false;
        //checking for free spaces
        for (let i = 0; i < dashboard.length; i++) {
            for (let j = 0; j < dashboard.length; j++) {
                if (dashboard[i][j] == false) {
                    freePlaces = true;
                    break;
                }
            }
            if (freePlaces) break;
        }
        if (!freePlaces) {
            console.log('The game ended! Nobody wins :(');
            break;
        }
        //checking if a player is trying to make a turn on already taken place
        if (dashboard[row][column] != false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        if (isFirstPlayerTurn) {
            dashboard[row][column] = firstPlayerMark;
            isFirstPlayerTurn = false;
        } else {
            dashboard[row][column] = secondPlayerMark;
            isFirstPlayerTurn = true;
        }

        //checking for a winner
        let winner;
        //checking rows and columns
        for (let i = 0; i < dashboard.length; i++) {
            let firstMark;
            if (dashboard[i][1] == dashboard[i][0] && dashboard[i][2] == dashboard[i][0]) {
                firstMark = dashboard[i][0];
            } else if (dashboard[1][i] == dashboard[0][i] && dashboard[2][i] == dashboard[0][i]) {
                firstMark = dashboard[0][i];
            }
            winner = firstMark;
            if (winner) break;
        }
        //checking diagonals
        const firstMarkMainDiagonal = dashboard[0][0];
        const firstMarkSecondaryDiagonal = dashboard[0][2];
        if (dashboard[1][1] == firstMarkMainDiagonal && dashboard[2][2] == firstMarkMainDiagonal) {
            winner = firstMarkMainDiagonal;
        } else if (dashboard[1][1] == firstMarkSecondaryDiagonal && dashboard[2][0] == firstMarkSecondaryDiagonal) {
            winner = firstMarkSecondaryDiagonal;
        }

        if (winner) {
            console.log(`Player ${winner} wins!`);
            break;
        }
    }
    dashboard.forEach(row => {
        console.log(row.join('\t'));
    })
}

ticTacToe(['0 0',
    '0 1',
    '1 0',
    '1 2',
    '2 0',
    '2 1',
    '2 2',
    '0 0'])