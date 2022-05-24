let numberOfFilms = prompt('How many films did you watch?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


for (let i = 0; i < 2; i++) {
    const a = prompt('What is the name of the one recently watched movie?', ''),
        b = prompt('How can you rate this movie?', '');

        if (a != null && b !== null && a != '' & b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
}

if (personalMovieDB.count < 10) {
    alert('Not many films was watched');
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    alert('Youre a good fan');
} else if ( personalMovieDB.count >= 30 ) {
    alert('Youre kinoman');
} else {
    alert('Error');
}

console.log(personalMovieDB);

//good




































// let firstQuestion = prompt('How many films did you watch?', '');
// let secondQuestion = prompt('What is the name of the one recently watched movie?', '');
// let thirdQuestion = prompt('How can you rate this movie?', '');

// for (let i = 0; i < 3; i++) {
//     if (firstQuestion === null || firstQuestion.length > 5) {
//         break;
//     } else if (secondQuestion === null || secondQuestion.length > 5) {
//         break;
//     } else if (thirdQuestion === null || thirdQuestion.length > 5) {
//         break;
//     }
//     console.log(i);
// }

// let personalMovieDB = {
//     count: firstQuestion,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// if (personalMovieDB.count < 10) {
//     alert('Not many films was watched');
// } else if ( personalMovieDB.count === 10 || personalMovieDB.count <= 30 ) {
//     alert('Youre a good fan');
// } else if ( personalMovieDB.count > 30 ) {
//     alert('Youre kinoman');
// } else {
//     alert('Error');
// }

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);


