
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const adds = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          bgImg = document.querySelector('.promo__bg'),
          addInput = document.querySelector('.adding__input'),
          enterButton = document.querySelector('.add button'),
          movieList = document.querySelector('.promo__interactive-list'),
          favoriteButton = document.querySelector('.add [type="checkbox"]'),
          addForm = document.querySelector('form.add');
    
        addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = favoriteButton.checked;
        
        if (newFilm) {
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Adding a new favorite film');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();

    });


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    const makeChanges = () => {
        genre.textContent = 'ДРАМА';
        bgImg.style.backgroundImage = "url('../img/bg.jpg')";
    };
    

    const sortArr = (arr) => {
        arr.sort();
    };
    
    
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
                `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                
                createMovieList(films, parent);
            });
        });
    }
    
    
    deleteAdv(adds);
    makeChanges();
    createMovieList(movieDB.movies, movieList);


    // const inputValue = (e) => {
    //     movieList.innerHTML += `
    //         <li class="promo__interactive-item"> ${e.target.value}
    //             <div class="delete"></div>
    //         </li>
    //     `;
    //     movieDB.movies.push(e.target.value);
    //     console.log(movieDB.movies);
    // };
    
    // // const deleteFilm = (e) => {
    // //     console.log(document)
    // // };
    
    // enterButton.addEventListener('click', (e) => {
    //     e.preventDefault();
    // });
    
    // input.addEventListener('change', inputValue);
    
    
    // const changeButtonValue = (e) => {
    //     if (e.target.value) {
    //         console.log('Adding a new favorite film');
    //     }
    // };
    
    // favoriteButton.addEventListener('change', changeButtonValue, {once: true});
    
});





// trashBox.addEventListener('click', deleteFilm);























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



