window.addEventListener('load', solve);

function solve() {

    const timeInput = document.getElementById('time');
    const dateInput = document.getElementById('date');
    const placeInput = document.getElementById('place');
    const eventInput = document.getElementById('event-name');
    const contactInput = document.getElementById('email');

    const inputs = [timeInput, dateInput, placeInput, eventInput, contactInput]

    const addBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementById('clear');

    //Event listeners
    addBtn.addEventListener('click', moveToLastCheck);
    clearBtn.addEventListener('click', clearFinishedList);


    function moveToLastCheck(e) {

        const checkList = document.getElementById('check-list');

        if (checkInputs() === false) {
            return;
        }
        e.target.disabled = 'disabled';

        const pTime = document.createElement('p');
        const pPlace = document.createElement('p');
        const pEvent = document.createElement('p');
        const pContact = document.createElement('p');

        pTime.textContent = `Begins: ${dateInput.value} at ${timeInput.value}`;
        pPlace.textContent = `In: ${placeInput.value}`;
        pEvent.textContent = `Event: ${eventInput.value}`;
        pContact.textContent = `Contact: ${contactInput.value}`;

        const article = document.createElement('article');
        article.appendChild(pTime);
        article.appendChild(pPlace);
        article.appendChild(pEvent);
        article.appendChild(pContact);

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';

        //Event listeners
        editBtn.addEventListener('click', editEvent);
        continueBtn.addEventListener('click', moveToUpcoming);

        const li = document.createElement('li');
        li.classList.add('event-content');
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        checkList.appendChild(li);

        clearInputs();
    }

    function checkInputs() {
        return inputs.every(input => input.value !== '' && input.value.length > 0);
    }

    function clearInputs() {
        inputs.forEach(input => input.value = '');
    }

    function editEvent(e) {
        const li = e.target.parentElement;
        const paragraphs = li.children[0].children;
        const [, date, , time] = paragraphs[0].textContent.split(' ');
        const place = paragraphs[1].textContent.split(': ')[1];
        const event = paragraphs[2].textContent.split(': ')[1];
        const email = paragraphs[3].textContent.split(': ')[1];

        //loading the info in the input field to edit it
        timeInput.value = time;
        dateInput.value = date;
        placeInput.value = place;
        eventInput.value = event;
        contactInput.value = email;

        //experimenting
        const editBtn = li.children[1];
        const continueBtn = li.children[2];
        li.removeChild(editBtn);
        li.removeChild(continueBtn);

        addBtn.disabled = false;
        li.parentElement.removeChild(li);
    }

    function moveToUpcoming(e) {

        const upcomingList = document.getElementById('upcoming-list');
        const li = document.getElementById('check-list').children[0];

        //Remove li from check-list
        li.parentElement.removeChild(li);

        const editBtn = li.children[1];

        li.removeChild(editBtn);
        li.removeChild(e.target);

        const finishedBtn = document.createElement('button');
        finishedBtn.classList.add('finished-btn');
        finishedBtn.textContent = 'Move To Finished';

        finishedBtn.addEventListener('click', moveToFinished);

        li.appendChild(finishedBtn);

        //Add li to upcoming-list
        upcomingList.appendChild(li);

        addBtn.disabled = false;
    }

    function moveToFinished(e) {

        const li = e.target.parentElement;
        li.parentElement.removeChild(li);
        li.removeChild(e.target);

        const finishedList = document.getElementById('finished-list');
        finishedList.appendChild(li);

    }

    function clearFinishedList(e) {
        const finishedList = document.getElementById('finished-list');
        finishedList.innerHTML = '';
    }
}




