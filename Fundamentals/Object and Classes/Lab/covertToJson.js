function objToJson(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }

    let jsonString = JSON.stringify(person);
    console.log(jsonString);
}