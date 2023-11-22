function trasureFinder(input) {
    let nums = input.shift().split(' ').map(Number);
    let message = input.shift();
    while (message !== 'find') {
        let index = 0;
        for (let i = 0; i < message.length; i++) {
            let char = message[i];
            if (index > nums.length - 1) {
                index = 0;
            }
            let replacement = String.fromCharCode(char.charCodeAt(0) - nums[index]);
            message = message.split('');
            message.splice(i, 1, replacement);
            message = message.join('');
            index++;
        }
        let typePattern = /&(?<type>\w+)&/g;
        let coordPattern = /<(?<coordinates>\w+)>/g;
        let typeMatch = [...message.matchAll(typePattern)];
        let coordMatch = [...message.matchAll(coordPattern)];
        let type = '';
        let coordinates = '';
        if (typeMatch[0]) {
            type = typeMatch[0].groups.type;
        }
        if (coordMatch[0]) {
            coordinates = coordMatch[0].groups.coordinates;
        }
        console.log(`Found ${type} at ${coordinates}`);
        message = input.shift();
    }
}
trasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"])

trasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$1634O57YC",
    "'stj)>34W68Z@",
    "find"])