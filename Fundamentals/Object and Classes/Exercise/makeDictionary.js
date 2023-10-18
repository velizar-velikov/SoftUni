function makeDictionary(arrayOfJsonString) {

    let dictionary = {};
    for (let item of arrayOfJsonString) {
        item = JSON.parse(item);
        let key = Object.keys(item).join();
        let value = Object.values(item).join();
        dictionary[key] = value;
    }

    let keys = Object.keys(dictionary)
        .sort((a, b) => a.localeCompare(b))
    let sortedDictionary = {};
    keys.forEach(a => sortedDictionary[a] = dictionary[a]);
    for (let [key, value] of Object.entries(sortedDictionary)) {
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])