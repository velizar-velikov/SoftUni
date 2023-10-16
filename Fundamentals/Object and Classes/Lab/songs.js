function printSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time
        }
    }
    let numberOfSongs = input.shift();
    let typeToPrint = input.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let tokens = input.shift().split('_');
        let typeList = tokens[0];
        let name = tokens[1];
        let time = tokens[2];

        let song = new Song(typeList, name, time);
        if (typeToPrint === 'all' || typeToPrint === typeList) {
            console.log(name);
        }
    }
}
printSongs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])