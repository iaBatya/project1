let numberOfFilms = prompt('How many films did you watch?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let a = prompt('What is the name of the one recently watched movie?', ''),
    b = prompt('How can you rate this movie?', ''),
    c = prompt('What is the name of the one recently watched movie?', ''),
    d = prompt('How can you rate this movie?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

//good
