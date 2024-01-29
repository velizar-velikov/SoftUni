window.addEventListener('load', loadStudents);

const tbody = document.querySelector('tbody');
const formElement = document.getElementById('form');
formElement.addEventListener('submit', addStudent);
const url = 'http://localhost:3030/jsonstore/collections/students';

async function loadStudents() {
    try {
        const response = await fetch(url);
        checkResponse(response);

        const studentsData = await response.json();
        append(tbody, ...createRows(Object.values(studentsData)));

    } catch (error) {
        alert(error.message);
    }
}

async function addStudent(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { firstName, lastName, facultyNumber, grade } = Object.fromEntries(formData.entries());

    try {
        if (firstName.length == 0 || lastName.length == 0 || facultyNumber.length == 0 || grade.length == 0) {
            throw new Error('All fields are required!');
        } else if (isNaN(Number(grade))) {
            throw new Error('Grade must be a number!');
        }

        const options = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                lastName,
                facultyNumber,
                grade
            })
        };
        const response = await fetch(url, options);
        checkResponse(response);

        const studentData = await response.json();
        append(tbody, ...createRows([studentData]));
        formElement.reset();

    } catch (error) {
        alert(error.message);
    }
}

function createRows(students) {

    const rows = [];
    for (const student of students) {
        const row = createElement('tr');

        append(row,
            createElement('td', student.firstName),
            createElement('td', student.lastName),
            createElement('td', student.facultyNumber),
            createElement('td', student.grade)
        );
        rows.push(row);
    }
    return rows;
}

function createElement(type, content) {
    const element = document.createElement(type);
    if (content) {
        element.textContent = content;
    }
    return element;
}

function append(parent, ...children) {
    for (let child of children) {
        parent.appendChild(child);
    }
    return parent;
}

async function checkResponse(response) {
    if (response.ok == false) {
        const error = await response.json();
        throw error;
    }
}