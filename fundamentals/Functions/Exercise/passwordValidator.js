function passwordValidator(password) {
    let isValid = true;
    if (password.length < 6 || password.length > 10) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (!/^[A-Za-z0-9]*$/.test(password)) {
        isValid = false;
        console.log('Password must consist only of letters and digits');
    }

    let digitCount = 0;

    for (let i = 0; i < password.length; i++) {
        if (password[i] == Number(password[i])) {
            digitCount++;
        }
    }

    if (digitCount < 2) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }

    if (isValid) {
        console.log('Password is valid');
    }

}
passwordValidator('Pa$s$s')