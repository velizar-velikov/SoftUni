window.addEventListener("load", solve);

function solve() {

    const mainDiv = document.getElementById('hero');
    const bodyDiv = document.querySelector('.body');

    //select dom elements
    const snowmanNameInput = document.getElementById('snowman-name');
    const snowmanHeightInput = document.getElementById('snowman-height');
    const locationInput = document.getElementById('location');
    const creatorNameInput = document.getElementById('creator-name');
    const specialAttributeInput = document.getElementById('special-attribute');

    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', onSubmit);

    //section to move to
    const snowmanPreviewList = document.querySelector('.snowman-preview');
    const snowList = document.querySelector('.snow-list');

    const inputs = [
        snowmanNameInput,
        snowmanHeightInput,
        locationInput,
        creatorNameInput,
        specialAttributeInput
    ];

    function onSubmit(e) {
        e.preventDefault();

        if (checkForEmptyInputs() === true) {
            alert('All inputs are required');
            return;
        }

        //saving input values before clearing them
        const inputValues = Array.from(inputs).map(input => input.value.trim());

        snowmanPreviewList.appendChild(createListItemForInfo(inputValues));

        clearInputs();
        addBtn.disabled = true;
    }

    //li for first section
    function createListItemForInfo(inputsValues) {
        const li = createElement('li', { className: 'snowman-info' }, [
            createElement('article', {}, [
                createElement('h3', {}, `Name: ${inputsValues[0]}`),
                createElement('p', {}, `Height: ${inputsValues[1]}`),
                createElement('p', {}, `Location: ${inputsValues[2]}`),
                createElement('p', {}, `Creator: ${inputsValues[3]}`),
                createElement('p', {}, `Attribute: ${inputsValues[4]}`)
            ]),
            createElement('div', { className: 'btn-container' }, [
                createElement('button', { className: 'edit-btn', onclick: () => onEdit(inputsValues) }, 'Edit'),
                createElement('button', { className: 'next-btn', onclick: () => onContinue(inputsValues) }, 'Next')
            ])
        ]);

        return li;
    }

    function onEdit(inputsValues) {
        for (let i = 0; i < inputsValues.length; i++) {
            inputs[i].value = inputsValues[i];
        }

        snowmanPreviewList.innerHTML = '';
        addBtn.disabled = false;
    }

    function onContinue(inputsValues) {
        snowmanPreviewList.innerHTML = '';
        snowList.appendChild(createListItemForConfirm(inputsValues));
    }

    //li for second section
    function createListItemForConfirm(inputsValues) {
        const li = createElement('li', { className: 'snowman-info' }, [
            createElement('article', {}, [
                createElement('h3', {}, `Name: ${inputsValues[0]}`),
                createElement('p', {}, `Height: ${inputsValues[1]}`),
                createElement('p', {}, `Location: ${inputsValues[2]}`),
                createElement('p', {}, `Creator: ${inputsValues[3]}`),
                createElement('p', {}, `Attribute: ${inputsValues[4]}`),
                createElement('button', { className: 'send-btn', onclick: () => onConfirm(inputsValues) }, 'Send')
            ])
        ]);

        return li;
    }

    function onConfirm() {
        mainDiv.remove();
        const backBtn = createElement('button', { className: 'back-btn' }, 'Back');
        backBtn.addEventListener('click', () => location.reload());
        document.getElementById('back-img').hidden = false;
        bodyDiv.appendChild(backBtn);
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