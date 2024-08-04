import {IFilm} from '@/interface/';


const INITIAL_FILMS_DATA: IFilm[] = [{
    id: '1', name: 'Black Widow', img: '/images/film-posters/black-widow.jpg', isFavorite: false, rating: 324
}, {
    id: '2', name: 'Shang Chi', img: '/images/film-posters/black-widow.jpg', isFavorite: false, rating: 124
}, {
    id: '3', name: 'Loki', img: '/images/film-posters/black-widow.jpg', isFavorite: false, rating: 235
}, {
    id: '4', name: 'How I Met Your Mother', img: '/images/film-posters/black-widow.jpg', isFavorite: false, rating: 123
}, {
    id: 'tt0458290', name: 'Star Wars: The Clone Wars', img: 'https://m.media-amazon.com/images/M/MV5BZWFlNzRmOTItZjY1Ni00ZjZkLTk5MDgtOGFhOTYzNWFhYzhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg', isFavorite: true, rating: 8125
}, {
    id: '6', name: 'Friends', img: '/images/film-posters/black-widow.jpg', isFavorite: false, rating: 123
}, {
    id: '7', name: 'The Big Bang Theory', img: '/images/film-posters/black-widow.jpg', isFavorite: false, rating: 12
}, {
    id: '8', name: 'Two And a Half Men', img: '/images/film-posters/black-widow.jpg', isFavorite: false, rating: 456
}];
export function useGetFilms(): IFilm[] {
    return INITIAL_FILMS_DATA;
}