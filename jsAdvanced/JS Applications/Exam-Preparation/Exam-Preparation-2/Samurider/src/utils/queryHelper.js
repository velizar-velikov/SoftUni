export function parseQuery(query) {
    if (!query) {
        return {};
    }

    return Object.fromEntries(query.split('&').map((prop) => prop.split('=')));
}
