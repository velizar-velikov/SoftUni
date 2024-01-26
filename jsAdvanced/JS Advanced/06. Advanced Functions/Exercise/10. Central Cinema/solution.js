function solve() {
    let moviesList = document.querySelector('#movies > ul');
    let archiveList = document.querySelector('#archive > ul');

    let onScreenBtn = document.querySelector('#container > button');
    let clearBtn = document.querySelector('#archive > button');

    onScreenBtn.addEventListener('click', addListItemToMovies);
    clearBtn.addEventListener('click', clearArchive);

    let nameInput = document.querySelector('input[placeholder="Name"]');
    let hallInput = document.querySelector('input[placeholder="Hall"]');
    let ticketPriceInput = document.querySelector('input[placeholder="Ticket Price"]');

    let inputs = {
        name: nameInput,
        hall: hallInput,
        ticketPrice: ticketPriceInput
    }

    function validateInput(nameInput, hallInput, ticketPriceInput) {
        if (nameInput.value != '' && hallInput.value != '' && ticketPriceInput.value != '' && !isNaN(Number(ticketPriceInput.value))) {
            return true;
        }
        return false;
    }

    function createMovieTemplate(nameInput, hallInput, ticketPriceInput) {
        let movieEl = document.createElement('span');
        movieEl.textContent = `${nameInput.value}`;
        let hallEl = document.createElement('strong');
        hallEl.textContent = `Hall: ${hallInput.value}`;

        let price = document.createElement('strong');
        price.textContent = `${Number(ticketPriceInput.value).toFixed(2)}`;
        let ticketsCountInput = document.createElement('input');
        ticketsCountInput.setAttribute("placeholder", "Tickets Sold");
        let archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';

        archiveBtn.addEventListener('click', archiveMovie);

        let priceContainer = document.createElement('div');
        priceContainer.appendChild(price);
        priceContainer.appendChild(ticketsCountInput);
        priceContainer.appendChild(archiveBtn);

        let movieItem = document.createElement('li');
        movieItem.appendChild(movieEl);
        movieItem.appendChild(hallEl);
        movieItem.appendChild(priceContainer);

        return movieItem;
    }

    function createArchiveMovieTemplate(movieName, ticketPrice, ticketsCountInput) {
        let movieEl = document.createElement('span');
        movieEl.textContent = `${movieName}`;
        let totalAmount = document.createElement('strong');
        totalAmount.textContent = `Total amount: ${(Number(ticketPrice) * Number(ticketsCountInput.value)).toFixed(2)}`;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteArchivedMovie);

        let archiveMovieItem = document.createElement('li');
        archiveMovieItem.appendChild(movieEl);
        archiveMovieItem.appendChild(totalAmount);
        archiveMovieItem.appendChild(deleteBtn);

        return archiveMovieItem;
    }

    function clearInputs(inputs) {
        for (const input in inputs) {
            inputs[input].value = '';
        }
    }

    function addListItemToMovies(e) {
        e.preventDefault();
        if (validateInput(nameInput, hallInput, ticketPriceInput)) {
            let movieItem = createMovieTemplate(nameInput, hallInput, ticketPriceInput);
            moviesList.appendChild(movieItem);
            clearInputs(inputs);
        }
    }

    function archiveMovie(e) {
        e.preventDefault();
        let archiveBtn = e.target;
        let movieItem = archiveBtn.parentElement.parentElement;
        let movieName = movieItem.querySelector('span').textContent;
        let ticketPrice = movieItem.querySelector('div strong').textContent;
        let ticketsCountInput = archiveBtn.parentElement.querySelector('input');
        if (!isNaN(Number(ticketsCountInput.value)) && ticketsCountInput.value != '' && Number(ticketsCountInput.value) >= 0) {
            moviesList.removeChild(movieItem);
            let archiveMovieItem = createArchiveMovieTemplate(movieName, ticketPrice, ticketsCountInput);
            archiveList.appendChild(archiveMovieItem);
        }
    }

    function deleteArchivedMovie(e) {
        e.preventDefault();
        let archivedMovie = e.target.parentElement;
        archiveList.removeChild(archivedMovie);
    }

    function clearArchive(e) {
        e.preventDefault();
        archiveList.innerHTML = '';
    }
}