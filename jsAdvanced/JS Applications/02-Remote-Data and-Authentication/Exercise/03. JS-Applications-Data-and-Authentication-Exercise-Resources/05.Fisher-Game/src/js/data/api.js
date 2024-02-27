const host = 'http://localhost:3030/';

async function request(method, endpoint, bodyData) {

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    };

    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    try {
        const response = await fetch(`${host}${endpoint}`, options)

        if (!response.ok) {
            const error = await response.json();
            throw error;
        }
        if (response.status == 204) {
            return;
        }

        const data = await response.json();

        return data;

    } catch (err) {
        alert(`Error: ${err.message}`);
        throw err;
    }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');