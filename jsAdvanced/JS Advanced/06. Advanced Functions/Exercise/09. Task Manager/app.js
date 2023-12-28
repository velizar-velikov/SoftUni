function solve() {
    let addBtn = document.getElementById('add');
    let inputTask = document.getElementById('task');
    let textArea = document.getElementById('description');
    let inputDate = document.getElementById('date');

    let openSection = document.querySelector('section:nth-child(2) div:nth-child(2)');
    let inProgressSection = document.querySelector('#in-progress');
    let completeSection = document.querySelector('section:nth-child(4) div:nth-child(2)');

    addBtn.addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();

        let heading = document.createElement('h3');
        let description = document.createElement('p');
        let date = document.createElement('p');

        let btnContainer = document.createElement('div');
        btnContainer.classList.add('flex');
        let startBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        startBtn.classList.add('green');
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete';

        startBtn.addEventListener('click', moveToInProgress);
        deleteBtn.addEventListener('click', removeTask);

        let task = document.createElement('article');

        if (inputTask.value && textArea.value && inputDate.value) {
            heading.textContent = inputTask.value;
            description.textContent = `Description: ${textArea.value}`;
            date.textContent = `Due Date: ${inputDate.value}`;

            btnContainer.appendChild(startBtn);
            btnContainer.appendChild(deleteBtn);

            task.appendChild(heading);
            task.appendChild(description);
            task.appendChild(date);
            task.appendChild(btnContainer);

            openSection.appendChild(task);

            inputTask.value = '';
            textArea.value = '';
            inputDate.value = '';

            console.log('all good');
        }
    }

    function moveToInProgress(e) {
        let startBtn = e.target;
        let btnContainer = startBtn.parentElement;
        let task = btnContainer.parentElement;
        let openSection = task.parentElement;
        openSection.removeChild(task);
        btnContainer.removeChild(startBtn);

        let finishBtn = document.createElement('button');
        finishBtn.classList.add('orange');
        finishBtn.textContent = 'Finish';
        finishBtn.addEventListener('click', moveToComplete);
        btnContainer.appendChild(finishBtn);
        inProgressSection.appendChild(task);
    }

    function removeTask(e) {
        let task = e.target.parentElement.parentElement;
        let taskParent = task.parentElement;
        taskParent.removeChild(task);
        console.log('problem');
    }

    function moveToComplete(e) {
        let btnContainer = e.target.parentElement;
        let task = btnContainer.parentElement;
        let taskParent = task.parentElement;
        taskParent.removeChild(task);
        task.removeChild(btnContainer);

        completeSection.appendChild(task);
    }
}