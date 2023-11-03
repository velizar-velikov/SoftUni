function partyTime(input) {
    let guests = {
        'VIP': [],
        'regular': []
    };

    let guest = input.shift();
    while (guest != 'PARTY') {
        if (Number(guest[0]) == guest[0]) {
            guests['VIP'].push(guest);
        } else {
            guests['regular'].push(guest);
        }
        guest = input.shift();
    }

    for (let item of input) {
        if (guests['VIP'].includes(item)) {
            guests['VIP'].splice(guests['VIP'].indexOf(item), 1);
        } else if (guests['regular'].includes(item)) {
            guests['regular'].splice(guests['regular'].indexOf(item), 1);
        }
    }
    
    console.log(guests['VIP'].length + guests['regular'].length);

    guests['VIP'].forEach(person => console.log(person));
    guests['regular'].forEach(person => console.log(person));

}
// partyTime(['7IK9Yo0h',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc',
// 'tSzE5t0p',
// 'PARTY',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc'
// ])

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])