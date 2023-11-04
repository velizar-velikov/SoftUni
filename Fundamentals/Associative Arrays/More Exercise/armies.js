function armies(input) {
    let leaders = {};
    let leadersTotalArmy = {};

    while (input.length > 0) {
        let command = input.shift();

        if (command.includes('arrives')) {
            let [leader] = command.split(' arrives');
            leaders[leader] = {};
            leadersTotalArmy[leader] = 0;
        } else if (command.includes(': ')) {
            let [leader, info] = command.split(': ');
            if (leader in leaders) {
                let [armyName, armyCount] = info.split(', ');
                armyCount = Number(armyCount);
                leaders[leader][armyName] = armyCount;
                leadersTotalArmy[leader] += armyCount;
            }
        } else if (command.includes(' + ')) {
            let [armyName, armyCount] = command.split(' + ');
            armyCount = Number(armyCount);
            for (let leader in leaders) {
                if (armyName in leaders[leader]) {
                    leaders[leader][armyName] += armyCount;
                    leadersTotalArmy[leader] += armyCount;
                    break;
                }
            }
        } else if (command.includes('defeated')) {
            let [leader] = command.split(' ');
            delete leaders[leader];
            delete leadersTotalArmy[leader];
        }
    }
    let leadersTotalArmyEntries = Object.entries(leadersTotalArmy).sort((a, b) => b[1] - a[1]);

    for (let [leader, totalArmyCount] of leadersTotalArmyEntries) {
        console.log(`${leader}: ${totalArmyCount}`);
        let sortedLeaderArmyCountEntries = Object.entries(leaders[leader]).sort((a, b) => b[1] - a[1]);
        sortedLeaderArmyCountEntries.forEach(([army, count]) => console.log(`>>> ${army} - ${count}`));
    }
}
// armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])

armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])