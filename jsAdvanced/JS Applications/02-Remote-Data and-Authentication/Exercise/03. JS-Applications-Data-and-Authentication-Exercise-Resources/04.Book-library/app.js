window.addEventListener('load', () => {
    solve();
})

function solve() {

    const loadAllBookBtn = document.getElementById('loadBooks');
    loadAllBookBtn.addEventListener('click', loadAllBooks);
    const tbody = document.querySelector('tbody');

    const authorInput = document.querySelector('input[name="author"]');
    const titleInput = document.querySelector('input[name="title"]');

    const url = 'http://localhost:3030/jsonstore/collections/books';
    const formElement = document.querySelector('form');

    formElement.addEventListener('submit', addBook);

    async function loadAllBooks(e) {

        const url = 'http://localhost:3030/jsonstore/collections/books';

        // try {
        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            throw error;
        }

        const booksData = await response.json();
        console.log(Object.values(booksData));
        createBooksRows(Object.values(booksData));

        // } catch (e) {
        //     alert(`Error: ${e.message}`);
        // }
    }

    async function addBook(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let { title, author } = Object.fromEntries(formData.entries());

        if (title.length == 0 || author.length == 0) {
            return;
        }

        const data = {
            author,
            title
        }

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                const error = await response.json();
                throw error;
            }

            const resData = await response.json();

            tbody.appendChild(createRow(title, author, resData._id));

            //clearing inputs
            authorInput.value = '';
            titleInput.value = '';


        } catch (error) {
            alert(`Error: ${error.message}`);
        }


    }

    function createRow(title, author, id) {
        const tr = document.createElement('tr');
        tr._id = id;

        const td1 = createElement('td', title);
        const td2 = createElement('td', author)

        const editBtn = createElement('button', 'Edit');
        const deleteBtn = createElement('button', 'Delete');
        editBtn.addEventListener('click', moveForEdit);
        deleteBtn.addEventListener('click', deleteBook);

        const td3 = createElement('td');
        append(td3, [editBtn, deleteBtn]);
        append(tr, [td1, td2, td3]);

        return tr;
    }

    function moveForEdit(e) {
        const id = e.target.parentElement.parentElement._id;

        document.querySelector('form h3').textContent = 'Edit FORM';
        let titleElement = e.target.parentElement.parentElement.querySelector('td');
        let authorElement = e.target.parentElement.parentElement.querySelectorAll('td')[1];
        [titleInput.value, authorInput.value] = [titleElement.textContent, authorElement.textContent];

        formElement.removeEventListener('submit', addBook);
        formElement.addEventListener('submit', editBook);

        //nesting to access the title, author and id
        async function editBook(e) {
            e.preventDefault();

            document.querySelector('form h3').textContent = 'FORM';

            let { title, author } = Object.fromEntries((new FormData(e.currentTarget)).entries());

            console.log(id);

            const url = `http://localhost:3030/jsonstore/collections/books/${id}`;

            const data = {
                author,
                title
            };


            const options = {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };


            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    const error = await response.json();
                    throw error;
                }

                titleElement.textContent = titleInput.value;
                authorElement.textContent = authorInput.value;

                titleInput.value = '';
                authorInput.value = '';

                formElement.removeEventListener('submit', editBook);
                formElement.addEventListener('submit', addBook);

            } catch (e) {
                alert(`Error: ${e.message}`);
            }
        }

    }

    async function deleteBook(e) {

        const id = e.target.parentElement.parentElement._id;
        console.log(id);

        const url = `http://localhost:3030/jsonstore/collections/books/${id}`;

        const options = {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' }
        }

        try {

            const response = await fetch(url, options);

            if (!response.ok) {
                const error = await response.json();
                throw error;
            }

            e.target.parentElement.parentElement.remove();

        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }


    function createBooksRows(booksData) {
        tbody.innerHTML = '';

        for (let book of booksData) {
            const row = createElement('tr');

            const editBtn = createElement('button', 'Edit');
            const deleteBtn = createElement('button', 'Delete');

            editBtn.addEventListener('click', moveForEdit);
            deleteBtn.addEventListener('click', deleteBook);

            const tdButtons = createElement('td');
            append(tdButtons, [editBtn, deleteBtn]);

            append(row, [
                createElement('td', book.title),
                createElement('td', book.author),
                tdButtons
            ]);

            tbody.appendChild(row);
        }
    }


    function createElement(type, content) {
        const element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }
        return element;
    }

    function append(parent, children) {
        for (let child of children) {
            parent.appendChild(child);
        }
        return parent;
    }
}