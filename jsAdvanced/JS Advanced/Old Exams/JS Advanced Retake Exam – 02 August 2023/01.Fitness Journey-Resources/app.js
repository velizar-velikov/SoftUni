window.addEventListener('load', solve);

function solve() {

    const bodyDiv = document.getElementById('body');
    const mainDiv = document.getElementById('main');

    const previewList = document.querySelector('.class-info');
    const confirmList = document.querySelector('.confirm-class');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const contactNumberInput = document.getElementById('contact-number');
    const classTypeInput = document.getElementById('class-type');
    const classTimeInput = document.getElementById('class-time');

    const inputs = [
        nameInput,
        emailInput,
        contactNumberInput,
        classTypeInput,
        classTimeInput
    ];

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', moveToPreviewSection);

    function moveToPreviewSection(e) {
        e.preventDefault();

        if (checkForEmptyInputs() === true) {
            alert('All inputs are required');
            return;
        }

        //saving input values before clearing them
        const inputValues = Array.from(inputs).map(input => input.value);
        const li = createListItem(inputValues);
        previewList.appendChild(li);

        clearInputs();
        nextBtn.disabled = true;
    }

    function loadForEdit(inputsValues) {
        for (let i = 0; i < inputsValues.length; i++) {
            inputs[i].value = inputsValues[i];
        }
        nextBtn.disabled = false;
        previewList.innerHTML = '';
    }

    function moveToComfirmSection(article) {
        const li = article.parentElement;
        li.remove();
        li.className = 'continue-info';
        li.removeChild(li.lastElementChild);
        li.removeChild(li.lastElementChild);
        li.appendChild(createElement('button', { className: 'cancel-btn', onclick: () => cancelClass(li) }, 'Cancel'))
        li.appendChild(createElement('button', { className: 'confirm-btn', onclick: () => confirmCLass() }, 'Confirm'));
        confirmList.appendChild(li);
    }

    function cancelClass(li) {
        li.remove();
        nextBtn.disabled = false;
    }

    function confirmCLass() {
        mainDiv.remove();
        bodyDiv.appendChild(createElement('h1', { id: 'thank-you' }, 'Thank you for scheduling your appointment, we look forward to seeing you!'));
        bodyDiv.appendChild(createElement('button', { id: 'done-btn', onclick: reloadPage }, 'Done'));
    }

    function reloadPage() {
        location.reload();
    }

    function createListItem(inputValues) {

        const article = createElement('article', { className: 'personal-info' }, [
            createElement('p', {}, nameInput.value),
            createElement('p', {}, emailInput.value),
            createElement('p', {}, contactNumberInput.value),
            createElement('p', {}, classTypeInput.value),
            createElement('p', {}, classTimeInput.value),
        ]);
        const li = createElement('li', { className: 'info-item' }, [
            article,
            createElement('button', { className: 'edit-btn', onclick: () => loadForEdit(inputValues) }, 'Edit'),
            createElement('button', { className: 'continue-btn', onclick: () => moveToComfirmSection(article) }, 'Continue')
        ]);

        return li;
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