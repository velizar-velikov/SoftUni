export function parseQuery(query) {
    return Object.fromEntries(query.split('&').map((prop) => prop.split('=')));
}
