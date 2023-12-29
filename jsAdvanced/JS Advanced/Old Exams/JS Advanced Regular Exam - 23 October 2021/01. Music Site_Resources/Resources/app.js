window.addEventListener('load', solve)

function solve() {

    let genreInput = document.getElementById('genre');
    let nameInput = document.getElementById('name');
    let authorInput = document.getElementById('author');
    let dateInput = document.getElementById('date');

    let inputs = {
        genreInput,
        nameInput,
        authorInput,
        dateInput
    }

    let collectionSongs = document.getElementsByClassName('all-hits-container')[0];
    let savedSongs = document.getElementsByClassName('saved-container')[0];
    let likedSongs = document.querySelector('.likes p');

    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', appendSongToCollection);

    function validateInput(genreInput, nameInput, authorInput, dateInput) {
        if (genreInput.value != '' && nameInput.value != '' && authorInput.value != '' && dateInput.value != '') {
            return true;
        }
        return false;
    }

    function clearInputs(inputs) {
        for (let input in inputs) {
            inputs[input].value = '';
        }
    }

    function createSongTemplate(genreInput, nameInput, authorInput, dateInput) {

        if (validateInput(genreInput, nameInput, authorInput, dateInput)) {

            let img = document.createElement('img');
            img.setAttribute('src', './static/img/img.png');
            let genre = document.createElement('h2');
            genre.textContent = `Genre: ${genreInput.value}`;
            let movieName = document.createElement('h2');
            movieName.textContent = `Name: ${nameInput.value}`;
            let author = document.createElement('h2');
            author.textContent = `Author: ${authorInput.value}`;
            let date = document.createElement('h3');
            date.textContent = `Date: ${dateInput.value}`

            let saveBtn = document.createElement('button');
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = 'Save song';
            saveBtn.addEventListener('click', moveToSaved);

            let likeBtn = document.createElement('button');
            likeBtn.classList.add('like-btn');
            likeBtn.textContent = 'Like song';
            likeBtn.addEventListener('click', increaseLikes);
            likeBtn.addEventListener('click', disableLikeBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', removeSong);

            let song = document.createElement('div');
            song.classList.add('hits-info');
            song.appendChild(img);
            song.appendChild(genre);
            song.appendChild(movieName);
            song.appendChild(author);
            song.appendChild(date);
            song.appendChild(saveBtn);
            song.appendChild(likeBtn);
            song.appendChild(deleteBtn);

            return song;
        }
    }

    function appendSongToCollection(e) {
        e.preventDefault();
        let newSong = createSongTemplate(genreInput, nameInput, authorInput, dateInput);
        collectionSongs.appendChild(newSong);
        clearInputs(inputs);
    }

    function increaseLikes() {
        let tokens = likedSongs.textContent.split(' ');
        let likedSongsNumber = Number(tokens.pop());
        likedSongsNumber++;
        tokens.push(likedSongsNumber);
        likedSongs.textContent = tokens.join(' ');
    }

    function disableLikeBtn(e) {
        e.target.disabled = 'true';
        e.target.style.backgroundColor = 'grey';
    }

    function moveToSaved(e) {
        let song = e.target.parentElement;
        song.parentElement.removeChild(song);
        let saveBtn = song.querySelector('.save-btn');
        let likeBtn = song.querySelector('.like-btn');
        song.removeChild(saveBtn);
        song.removeChild(likeBtn);
        savedSongs.appendChild(song);
    }

    function removeSong(e) {
        let song = e.target.parentElement;
        song.parentElement.removeChild(song);
    }
}