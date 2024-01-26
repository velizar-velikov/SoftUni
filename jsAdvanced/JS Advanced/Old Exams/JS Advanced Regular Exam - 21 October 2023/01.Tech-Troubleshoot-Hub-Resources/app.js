window.addEventListener('load', solution);

function solution() {

  const employeeInput = document.getElementById('employee');
  const categoryInput = document.getElementById('category');
  const urgencyInput = document.getElementById('urgency');
  const teamInput = document.getElementById('team');
  const descriptionInput = document.getElementById('description');
  const inputs = [
    employeeInput,
    categoryInput,
    urgencyInput,
    teamInput,
    descriptionInput
  ];

  const previewList = document.querySelector('.preview-list');
  const pendingList = document.querySelector('.pending-list');
  const resolvedList = document.querySelector('.resolved-list');

  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', addTask);


  function addTask(e) {
    e.preventDefault();

    if (checkInputs() === false) {
      return;
    }

    //Saving input values before clearing them
    const inputValues = saveInputs();

    const li = createElement('li', { class: 'problem-content' });
    const article = createElement('article');
    const pFrom = createElement('p', null, `From: ${inputValues[0]}`);
    const pCategory = createElement('p', null, `Category: ${inputValues[1]}`);
    const pUrgency = createElement('p', null, `Urgency: ${inputValues[2]}`);
    const pAssigned = createElement('p', null, `Assigned to: ${inputValues[3]}`);
    const pDescription = createElement('p', null, `Description: ${inputValues[4]}`);
    const editBtn = createElement('button', { class: 'edit-btn' }, 'Edit');
    const continueBtn = createElement('button', { class: 'continue-btn' }, 'Continue');

    append(article, pFrom, pCategory, pUrgency, pAssigned, pDescription, editBtn, continueBtn);
    append(li, article, editBtn, continueBtn);
    append(previewList, li);
    addBtn.disabled = true;

    editBtn.addEventListener('click', edit);
    continueBtn.addEventListener('click', moveToPending);
    clearInputs();

    function edit() {
      previewList.removeChild(li);
      addBtn.disabled = false;

      //Loading input values back for editing
      [employeeInput.value, categoryInput.value, urgencyInput.value, teamInput.value, descriptionInput.value] = inputValues;
    }

    function moveToPending() {
      li.removeChild(editBtn);
      li.removeChild(continueBtn);
      const resolvedBtn = createElement('button', { class: 'resolve-btn' }, 'Resolved');
      append(li, resolvedBtn);
      resolvedBtn.addEventListener('click', moveToResolved);

      //Automatically removes li from previewList and appends it to pendingList
      pendingList.appendChild(li);

      function moveToResolved() {
        li.removeChild(resolvedBtn);
        const clearBtn = createElement('button', { class: 'clear-btn' }, 'Clear');
        clearBtn.addEventListener('click', clearResolved);
        append(li, clearBtn);

        //Automatically removes li from pendingList and appends it to resolvedList
        resolvedList.appendChild(li);
      }
    }
  }

  function createElement(type, attrObj, content) {
    const element = document.createElement(type);

    if (attrObj) {
      for (let attr in attrObj) {
        element.setAttribute([attr], attrObj[attr]);
      }
    }
    if (content) {
      element.textContent = content;
    }
    return element;
  }

  function append(parent, ...children) {
    for (let child of children) {
      parent.appendChild(child);
    }
  }

  function clearResolved() {
    resolvedList.innerHTML = '';
  }

  function checkInputs() {
    return inputs.every(input => input.value != '');
  }

  function clearInputs() {
    inputs.forEach(input => input.value = '');
  }

  function saveInputs() {
    return Array.from(inputs).map(input => input.value);
  }
}




