function manageMeetings(input) {
    let meetingList = new Object();

    for (let item of input) {
        let [day, name] = item.split(' ');
        if (meetingList.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            meetingList[day] = name;
        }
    }
    for (let [day, name] of Object.entries(meetingList)) {
        console.log(`${day} -> ${name}`);
    }
}
manageMeetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])
