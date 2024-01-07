function validateHTTPRequestObj(httpObject) {
    validProperties = {
        method: ['GET', 'POST', 'DELETE', 'CONNECT'],
        uri: /[w\.]+/,
        version: ['HTTP/0.9', 'HTTP/1.0', 'HTTP/`1.1', 'HTTP/2.0'],
        message: /[^<>\\&\'\"]+/
    }

    let invalidProp;

    if (validProperties.method.includes(httpObject.method) &&
        validProperties.uri.test(httpObject.uri) &&
        validProperties.version.includes(httpObject.version) &&
        validProperties.message.test(httpObject.message)) {
        return httpObject;
    } else {

        if (!validProperties.method.includes(httpObject.method)) invalidProp = 'Method';
        if (!validProperties.uri.test(httpObject.uri)) invalidProp = 'URI';
        if (!validProperties.version.includes(httpObject.version)) invalidProp = 'Version';
        if (!validProperties.message.test(httpObject.message)) invalidProp = 'Message';
    }

    throw new Error(`Invalid request header: Invalid ${invalidProp}`);
}

validateHTTPRequestObj({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})