function attachEvents() {

    const phonebookList = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const inputs = [personInput, phoneInput];

    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', createContact);
    phonebookList.addEventListener('click', deletePhone);

    const url = 'http://localhost:3030/jsonstore/phonebook';

    async function loadContacts() {

        try {
            const response = await fetch(url);

            if (!response.ok) {
                const error = await response.json();
                throw error;
            }

            const phonebookData = await response.json();
            phonebookList.innerHTML = '';
            appendListItems(phonebookData);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    async function createContact() {

        if (checkInputs() == false) {
            alert('All inputs are required!')
            return;
        }

        const contactData = {
            person: personInput.value,
            phone: phoneInput.value
        }
        const options = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactData)
        }
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                const error = await response.json();
                throw error;
            }
            clearInputs();
            loadContacts();

        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    async function deletePhone(event) {
        const element = event.target;
        if (element.textContent == 'Delete') {
            element.parentElement.remove();
        }
        const key = element.parentElement.dataset.id;

        try {
            const response = await fetch(`${url}/${key}`, {
                method: 'delete'
            });

            if (!response.ok) {
                const error = await response.json();
                throw error;
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    function appendListItems(phonebookData) {

        for (let obj of Object.values(phonebookData)) {
            const li = document.createElement('li');
            li.dataset.id = obj._id;
            li.textContent = `${obj.person}: ${obj.phone}`;

            const button = document.createElement('button');
            button.textContent = 'Delete';
            li.appendChild(button);
            phonebookList.appendChild(li);
        }
    }

    function checkInputs() {
        return inputs.every(input => input.value.length > 0);
    }

    function clearInputs() {
        inputs.forEach(input => input.value = '');
    }
}

attachEvents();