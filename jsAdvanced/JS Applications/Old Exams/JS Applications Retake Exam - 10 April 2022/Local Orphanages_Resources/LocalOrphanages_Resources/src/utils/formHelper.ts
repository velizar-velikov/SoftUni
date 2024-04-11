export function createSubmitHandler(callback: Function): Function {
    return function (event: SubmitEvent) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form as HTMLFormElement);
        const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        const data = Object.fromEntries(entries);
        callback(data, form);
    };
}
