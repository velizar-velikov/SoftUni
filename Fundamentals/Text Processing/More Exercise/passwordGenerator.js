function passwordGenerator(input) {
    let concatString = input[0].concat(input[1]);
    let word = input[2];
    let vowels = ['a', 'e', 'o', 'i', 'u'];

    let password = '';

    let index = 0;
    for (let i = 0; i < concatString.length; i++) {
        let char = concatString[i];
        if (vowels.includes(char)) {
            if (index > word.length - 1) {
                index = 0;
            }
            char = word[index];
            password += char.toUpperCase();
            index++;
        } else {
            password += char;
        }
    }

    password = password.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}
// passwordGenerator([
//     'ilovepizza', 'ihatevegetables',
//     'orange'
//     ])

passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
])