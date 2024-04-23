const queryParser = (endpoint) => {
    const query = endpoint.split('?')[1];
    const queryObject = Object.fromEntries(
        query.split('&').map((str) => {
            const strEntries = str.split('=');
            strEntries[1] = strEntries[1].replaceAll('+', ' ');
            return strEntries;
        })
    );
    return queryObject;
};

module.exports = { queryParser };
