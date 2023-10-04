function repeatString(str, repCount) {
    let result = '';
    for (let i = 0; i < repCount; i++) {
        result += str;
    }
    return result;
}
repeatString('abc', 3)