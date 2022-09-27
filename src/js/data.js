import { config } from "../config"

// Loads array of films using kinopoisk api
export function getFilms(page){
    return fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?page=${page}`, {
        method: 'GET',
        mode: "cors",
        headers: {
            'X-API-KEY': config.APIKEY,
            'Content-Type': 'application/json',
        }
    })
}

// Loads array of search results using kinopoisk api 
export function searchFilms(query, page){
    return fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${query}&page=${page}`, {
        method: 'GET',
        mode: "cors",
        headers: {
            'X-API-KEY': config.APIKEY,
            'Content-Type': 'application/json',
        }
    })
}