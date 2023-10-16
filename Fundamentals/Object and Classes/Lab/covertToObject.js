function jsonStringToObject (jsonString) {
    let info = JSON.parse(jsonString);
    let entries = Object.entries(info);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}