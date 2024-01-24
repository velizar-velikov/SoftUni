function attachEvents() {

    const textarea = document.getElementById('messages');
    const nameEl = document.querySelector('input[name="author"]');
    const messageEl = document.querySelector('input[name="content"]');
    const inputs = [nameEl, messageEl];
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    sendBtn.addEventListener('click', sendInfo);
    refreshBtn.addEventListener('click', refreshMessages);

    async function sendInfo() {

        if (checkInputs() == false) {
            return;
        }

        const url = 'http://localhost:3030/jsonstore/messenger';
        const data = {
            author: nameEl.value,
            content: messageEl.value
        };

        const options = {
            method: 'post',
            heathers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(url, options);

            if (response.ok == false) {
                const error = await response.json();
                throw error;
            }
            clearInputs();

        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }

    async function refreshMessages() {
        const url = 'http://localhost:3030/jsonstore/messenger';

        try {
            const response = await fetch(url);

            if (response.ok == false) {
                const error = await response.json();
                throw error;
            }

            const messagesData = await response.json();
            const output = [];

            for (let value of Object.values(messagesData)) {
                output.push(`${value.author}: ${value.content}`);
            }
            textarea.value = output.join('\n');
        } catch (error) {
            alert(`Error: ${error.message}`)
        }
    }

    function clearInputs() {
        inputs.forEach(input => input.value = '');
    }

    function checkInputs() {
        return inputs.every(input => input.value.length > 0);
    }
}

attachEvents();