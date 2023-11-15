// one-line solution
let matchPhoneNumber = ([input]) => console.log(input.match(new RegExp('\\+359([ -])2\\1\\d{3}\\1\\d{4}\\b', 'g')).join(', '));
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])

// normal solution
/* function matchPhoneNumber([input]) {

    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let result = input.match(pattern);
    console.log(result.join(', '));
}
*/