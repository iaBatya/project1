
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



const adds = document.querySelectorAll('.promo__adv img');
adds.forEach(item => {
    item.remove();
});

const genre = document.querySelector('.promo__genre');
console.log(genre);
genre.textContent = 'ДРАМА';

const bgImg = document.querySelector('.promo__bg');
console.log(bgImg);
bgImg.style.backgroundImage = "url('../img/bg.jpg')";

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

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



