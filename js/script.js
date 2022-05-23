

let numberOfFilms = +prompt('How many films did you watch?', '');
let movieName = prompt('What is the name of the one recently watched movie?');
let movieRate = prompt('How can you rate this movie?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        movieName: movieRate,
    },
    actors: {},
    genres: [],
    privat: false,
};

console.log(personalMovieDB.count,personalMovieDB.movies);
