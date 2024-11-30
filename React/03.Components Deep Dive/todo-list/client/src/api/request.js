async function request(url, method, data) {
    const options = {
        method,
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return data;
    } catch (error) {
        alert(error.message);
    }
}

export async function get(url) {
    return request(url, 'GET');
}

export async function post(url, data) {
    return request(url, 'POST', data);
}

export async function put(url, data) {
    return request(url, 'PUT', data);
}
