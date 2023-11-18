function winningTicket(input) {
    let tickets = input.split(/[ ]*,[ ]+/);
    let winningPattern = /[@#$^]{6,10}/;

    for (let ticket of tickets) {
        if (ticket.length == 0) continue;
        if (/\s+/.test(ticket)) {
            ticket = ticket.trim();
        }
        if (ticket.length !== 20) {
            console.log('invalid ticket');
            continue;
        }

        let leftHalf = ticket.slice(0, 10);
        let rightHalf = ticket.slice(10, 20);

        let leftMatch = leftHalf.match(winningPattern);
        let rightMatch = rightHalf.match(winningPattern);

        if (leftMatch === null || rightMatch === null) {
            console.log(`ticket "${ticket}" - no match`);
        } else if (leftMatch[0].length == rightMatch[0].length && leftMatch[0].length >= 6 && leftMatch[0].length < 10) {
            console.log(`ticket "${ticket}" - ${leftMatch[0].length}${leftMatch[0][0]}`);
        } else if (leftMatch[0].length == rightMatch[0].length && leftMatch[0].length == 10) {
            console.log(`ticket "${ticket}" - ${leftMatch[0].length}${leftMatch[0][0]} Jackpot!`);
        }
    }
}
// winningTicket('        $$$$$$$$$$$$$$$$$$$$   ,  aabb  , th@@@@@@eemo@@@@@@ey')
// winningTicket('validticketnomatch:(')
winningTicket('Cash$$$$$$Ca$$$$$$sh')
// winningTicket('           1234567890@@@@@@7890,       1234567890123456789,')