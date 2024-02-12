window.addEventListener('load', solve);

function solve() {

    const mainDiv = document.getElementById('main');
    const bodyDiv = document.getElementById('body');

    //select dom elements
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCountInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysCountInput = document.getElementById('days-count');

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onSubmit);

    const ticketInfoList = document.querySelector('.ticket-info-list');
    const confirmTicketList = document.querySelector('.confirm-ticket');

    const inputs = [
        firstNameInput,
        lastNameInput,
        peopleCountInput,
        fromDateInput,
        daysCountInput
    ];

    function onSubmit(e) {
        e.preventDefault();

        if (checkForEmptyInputs() === true) {
            alert('All inputs are required');
            return;
        }

        //saving input values before clearing them
        const inputValues = Array.from(inputs).map(input => input.value.trim());

        ticketInfoList.appendChild(createListItemForInfo(inputValues));

        clearInputs();
        nextBtn.disabled = true;
    }

    function createListItemForInfo(inputsValues) {
        const li = createElement('li', { className: 'ticket' }, [
            createElement('article', {}, [
                createElement('h3', {}, `Name: ${inputsValues[0]} ${inputsValues[1]}`),
                createElement('p', {}, `From date: ${inputsValues[3]}`),
                createElement('p', {}, `For ${inputsValues[4]} days`),
                createElement('p', {}, `For ${inputsValues[2]} people`),
            ]),
            createElement('button', { className: 'edit-btn', onclick: () => onEdit(inputsValues) }, 'Edit'),
            createElement('button', { className: 'continue-btn', onclick: () => onContinue(inputsValues) }, 'Continue')
        ]);

        return li;
    }

    function onEdit(inputsValues) {
        for (let i = 0; i < inputsValues.length; i++) {
            inputs[i].value = inputsValues[i];
        }

        ticketInfoList.innerHTML = '';
        nextBtn.disabled = false;
    }

    function onContinue(inputsValues) {
        ticketInfoList.innerHTML = '';
        confirmTicketList.appendChild(createListItemForConfirm(inputsValues));
    }

    function createListItemForConfirm(inputsValues) {
        const li = createElement('li', { className: 'ticket-content' }, [
            createElement('article', {}, [
                createElement('h3', {}, `Name: ${inputsValues[0]} ${inputsValues[1]}`),
                createElement('p', {}, `From date: ${inputsValues[3]}`),
                createElement('p', {}, `For ${inputsValues[4]} days`),
                createElement('p', {}, `For ${inputsValues[2]} people`)
            ]),
            createElement('button', { className: 'confirm-btn', onclick: () => onConfirm(inputsValues) }, 'Confirm'),
            createElement('button', { className: 'cancel-btn', onclick: () => onCancel(inputsValues) }, 'Cancel')
        ]);

        return li;
    }

    function onConfirm() {
        mainDiv.remove();
        const h1 = createElement('h1', { id: 'thank-you' }, 'Thank you, have a nice day!');
        const backBtn = createElement('button', { id: 'back-btn' }, 'Back');
        backBtn.addEventListener('click', () => location.reload());

        bodyDiv.appendChild(h1);
        bodyDiv.appendChild(backBtn);
    }

    function onCancel() {
        confirmTicketList.innerHTML = '';
        nextBtn.disabled = false;
    }


    function createElement(tagName, attributes = {}, content = '') {
        const element = document.createElement(tagName);

        for (const attr in attributes) {
            if (attr.substring(0, 2) == 'on') {
                const event = attr.slice(2);
                element.addEventListener(event, attributes[attr]);
            } else {
                element[attr] = attributes[attr];
            }
        }

        if (typeof content == 'string') {
            element.textContent = content;
        } else {
            for (let el of content) {
                element.appendChild(el);
            }
        }

        return element;
    }


    function clearInputs() {
        inputs.forEach(input => input.value = '');
    }

    function checkForEmptyInputs() {
        return inputs.some(input => input.value == '');
    }
}