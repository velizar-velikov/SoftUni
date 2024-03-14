const userItem = 'userData';

export const getUserData = () => JSON.parse(sessionStorage.getItem(userItem));

export const setUserData = (data) => sessionStorage.setItem(userItem, JSON.stringify(data));

export const clearUserData = () => sessionStorage.removeItem(userItem);

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()]);
        const data = Object.fromEntries(entries);

        callback(data, form);
    };
}

/**
 * Validates input fields end return true if all are valid,
 * false otherwise
 * @param {Element} form the form to validate
 * @returns { Boolean }
 */
export function validateInput(input) {
    const validation = {
        make: (x) => x.length >= 4,
        model: (x) => x.length >= 4,
        year: (x) => Number(x) >= 1950 && x <= 2050,
        description: (x) => x.length > 10,
        price: (x) => Number(x) > 0,
        img: (x) => x !== '',
        material: (x) => true,
    };

    const isValid = validation[input.name](input.value);

    if (isValid) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
    } else {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    }

    return isValid;
}
