/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

const adds = document.querySelectorAll('.promo__adv');
adds.forEach(item => {
    item.remove();
});

const genre = document.querySelector('.promo__genre');
console.log(genre);
genre.innerHTML = 'ДРАМА';

const bgImg = document.querySelector('.promo__bg');
console.log(bgImg);
bgImg.style.backgroundImage = "url('../img/bg.jpg')";

let films = document.querySelectorAll('.promo__interactive-item');
films = movieDB.movies;

console.log(films);



// films.forEach(item => {
//     item = movieDB.movies;
// });

// for (let i = 0; i < films.length; i++) {
//     films[i].textContent = movieDB.movies;
// }

// const adds = document.getElementsByClassName('promo__adv');
// const img = document.getElementsByClassName('addimg');
// console.log(img);
// const img1 = document.getElementById('img1');
// console.log(img1);
// img1.remove();


// img.remove();

// console.log(adds);
// adds.remove();



