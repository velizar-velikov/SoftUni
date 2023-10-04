//first method
function rightPlace(string1, char, string2) {
    let newString = '';
    for (let i = 0; i < string1.length; i++) {
        let letter = string1[i];
        if (letter == '_') {
            newString += char;
        } else {
            newString += string1[i];
        }
    }
    console.log(newString == string2 ? 'Matched' : 'Not Matched');
}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')

//second method
function rightPlace2(string1, char, string2) {
    let newStr = string1.replace('_', char);
    console.log(newStr == string2 ? 'Matched' : 'Not Matched');
}
rightPlace2('Str_ng', 'I', 'Strong')
rightPlace2('Str_ng', 'i', 'String')