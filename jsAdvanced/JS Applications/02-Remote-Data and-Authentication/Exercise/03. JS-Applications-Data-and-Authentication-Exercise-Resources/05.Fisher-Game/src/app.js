const userData = JSON.parse(localStorage.getItem('userData'));

const addBtn = document.querySelector('#addForm .add');
if (userData) {
    document.querySelector('.email span').textContent = userData.email;
    document.getElementById('guest').style.display = 'none';
    addBtn.disabled = false;
    loadData();
} else {
    document.getElementById('logout').style.display = 'none';
}
//Load all data
document.querySelector('.load').addEventListener('click', loadData);
//Create Catch
document.querySelector('#addForm').addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();

    if (!userData) {
        location = './login.html';
        return;
    }

    const formData = new FormData(e.currentTarget);

    const data = [...formData.entries().reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }, {}))];
}

async function loadData() {
    const url = ' http://localhost:3030/data/catches';
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('catches').replaceChildren(...data.map(createCatch));
}

function createCatch(data) {
    let isDisabled = (userData && data_ownerId === userData.id) ? false : true;
    const catches = createEl('div', { class: 'catch' },
        createEl('label', {}, 'Angler'),
        createEl('input', { type: 'text', class: 'angler', value: data.angler, disabled: isDisabled }),
        createEl('label', {}, 'Weight'),
        createEl('input', { type: 'text', class: 'weight', value: data.weight, disabled: isDisabled }),
        createEl('label', {}, 'Species'),
        createEl('input', { type: 'text', class: 'species', value: data.species, disabled: isDisabled }),
        createEl('label', {}, 'Location'),
        createEl('input', { type: 'text', class: 'location', value: data.location, disabled: isDisabled }),
        createEl('label', {}, 'Bait'),
        createEl('input', { type: 'text', class: 'bait', value: data.bait, disabled: isDisabled }),
        createEl('label', {}, 'Capture Time'),
        createEl('input', { type: 'number', class: 'captureTime', value: data.captureTime, disabled: isDisabled }),
        createEl('button', { class: 'update', id: data._id, disabled: isDisabled }, 'Update'),
        createEl('button', { class: 'delete', id: data._id, disabled: isDisabled }, 'Delete'));

    return catches;
}

function createEl(type, attr, ...content) {
    const element = document.createElement(type);
    for (const item in attr) {
        if (item == 'class') {
            element.classList.add(attr[item]);
        } else if (item == 'disasbled') {
            element.disabled = attr[item];
        } else {
            element[item] = attr[item];
        }
    }

    for (let item of content) {
        if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }
    return element;
}