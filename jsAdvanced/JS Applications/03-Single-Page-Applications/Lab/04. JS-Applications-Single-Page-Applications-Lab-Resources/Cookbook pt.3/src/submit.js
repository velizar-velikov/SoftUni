export async function onFormSubmit(links, callback, event) {
    await callback(event);
    showHome(links);
}