function tseamAccount(games) {
    let index = 0;
    let command = games[index];
    let account = command.split(' ');
    index++;
    command = games[index];
    index++;

    while (command != 'Play!') {
        let tokens = command.split(' ');
        let innerCommand = tokens[0];
        let game = tokens[1];

        if (innerCommand == 'Install') {
            if (!account.includes(game)) {
                account.push(game);
            }
        } else if (innerCommand == 'Uninstall') {
            if (account.includes(game)) {
                let place = account.indexOf(game);
                account.splice(place, 1);
            }
        } else if (innerCommand == 'Update') {
            if (account.includes(game)) {
                let place = account.indexOf(game);
                account.splice(place, 1);
                account.push(game);
            }
        } else if (innerCommand == 'Expansion') {
            let gameParts = game.split('-');
            let gameName = gameParts[0];
            if (account.includes(gameName)) {
                let place = account.indexOf(gameName);
                let expandedGame = game.split('-').join(':');
                account.splice(place + 1, 0, expandedGame);
            }
        }
        command = games[index];
        index++;
    }
    console.log(account.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'])