const host = 'http://localhost:3030/';

async function request(method, endpoint, data) {

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const user = JSON.parse(sessionStorage.getItem('user'));

    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    try {
        const response = await fetch(`${host}${endpoint}`, options);

        if (!response.ok) {
            const error = await response.json();
            throw error;
        }
        let responseData;
        if (response.ok && response.status != 204) {
            responseData = await response.json();
        }

        return responseData;

    } catch (err) {
        alert(`Error: ${err.message}`);
        throw err;
    }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');