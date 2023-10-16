function createMoviesObject(input) {
    let movies = [];
    for (let item of input) {
        let movie = new Object();
        let tokens = item.split(' ');
        if (tokens.includes('addMovie')) {
            let movieName = tokens.slice(1,).join(' ');
            movie.name = movieName;
            movies.push(movie);
        } else if (tokens.includes('directedBy')) {
            let index = tokens.indexOf('directedBy');
            let movieName = tokens.slice(0, index).join(' ');
            let director = tokens.pop();
            for (let item of movies) {
                if (item.name == movieName) {
                    item.director = director;
                }
            }
        } else {
            let index = tokens.indexOf('onDate');
            let movieName = tokens.slice(0, index).join(' ');
            let date = tokens.pop();
            for (let item of movies) {
                if (item.name == movieName) {
                    item.date = date;
                }
            }
        }
    }
    for (let item of movies) {
        let requiredKeys = ['name', 'director', 'date'];
        let checkAllKeys = requiredKeys.every(i => item.hasOwnProperty(i));
        if (checkAllKeys) {
            let itemString = JSON.stringify(item);
            console.log(itemString);
        }
    }
}
createMoviesObject([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])