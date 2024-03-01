import { getMovies } from "../data/getMovies.js";
import { showSection, showWelcomeMessage } from "../util.js";

export async function showHome() {
    debugger
    const user = JSON.parse(sessionStorage.getItem('user'));

    showSection('home-page');

    const moviesData = await getMovies();
    document.getElementById('movies-list').replaceChildren(...moviesData.map(createFullMovie))

    document.getElementById('movie').style.display = 'block';

    if (user) {
        document.getElementById('add-movie-button').style.display = 'block';
        showWelcomeMessage(user.email);
    }
}


function createMoviePreview(movieData) {

}


//-------------------------------------------------

function createFullMovie(movieData) {
    const movieElement = document.createElement('div');
    movieElement.className = 'container';

    movieElement.innerHTML = `
    <div class="container">
    <div class="row bg-light text-dark">
      <h1>Movie title: ${movieData.title}</h1>

      <div class="col-md-8">
        <img class="img-thumbnail" src="${movieData.img}"
          alt="Movie" />
      </div>
      <div class="col-md-4 text-center">
        <h3 class="my-3">Movie Description</h3>
        <p>${movieData.description}</p>
        <a class="btn btn-danger" href="#">Delete</a>
        <a class="btn btn-warning" href="#">Edit</a>
        <a class="btn btn-primary" href="#">Like</a>
        <span class="enrolled-span">Liked 1</span>
      </div>
    </div>
  </div>`;

    return movieElement;
}