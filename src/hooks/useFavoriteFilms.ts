import { useContext } from 'react';

import { UserContext } from '@/context';

export const useFavoriteFilms = () => {
    const {films} = useContext(UserContext);
    const favoriteFilms = films.filter(film => film.isFavorite);

    return {favoriteFilms};
};