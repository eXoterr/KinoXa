import { config } from './config';
import './css/style.scss';

import { getFilms, searchFilms } from './js/data';


//Get HTML tags in variables/constants
const listing = document.getElementById("listing");
const search_bttn = document.getElementById("do-search");
const search_field = document.getElementById("search-text");
const next_bttn = document.getElementById("next");
const prev_bttn = document.getElementById("prev");

// Page var used for search/listing pagination
let page = 1;


// Inject and run online player
function player(id){
    const player_section = document.getElementById("player");

    if (config.ENABLE_PLAYER){
        player_section.innerHTML = `<div id="yohoho" data-kinopoisk="${id}"></div>`;
        let tag = document.createElement("script");
        tag.src = config.PLAYER_URL;
        player_section.appendChild(tag);
    }else{
        player_section.innerHTML = `Player disabled.`;
    }

    
    
    player_section.style.display = "flex";
};

// Register global "player" fucntion
window.player = player;


// Creates "movie" block with poster and "play" button 
function createMovieElement(poster, id){
    const movie = `
         <div class="movie">
             <img src="${poster}" alt="" class="poster">
             <a href="#header" onclick="player(${id});">
                 <i class="bi bi-play-fill"></i>
                 Смотреть
             </a>
         </div>
        `

    return movie
};

loadFilms();

// Pagination
prev_bttn.onclick = (e) => {
    page -= 1;
    listing.innerHTML = "";
    loadFilms()
}

next_bttn.onclick = (e) => {
    page += 1;
    listing.innerHTML = "";
    loadFilms()
}

// Loads array of films by given "page"
function loadFilms(){
    getFilms(page).then((res) => res.json()).then(res => {
        listing.innerHTML = "";
        res.films.forEach((item, idx) => {
            listing.innerHTML += createMovieElement(item.posterUrl, item.filmId);
        } )
    }
    )
}


// Search field event binds
search_bttn.addEventListener("click", doSearch);
search_field.addEventListener("keypress", (event) => {
    if (event.key === "Enter"){
        doSearch();
    }
});


// Search field handler
function doSearch() {
    searchFilms(search_field.value, page).then((res) => res.json()).then(
        (res) => {
            listing.innerHTML = "";
            res.films.forEach((item, idx) => {
                listing.innerHTML += createMovieElement(item.posterUrl, item.filmId)
            } );
        }
    )
}