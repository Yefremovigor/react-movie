import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store';

export const selectFilmsWithFavoriteStatus = createSelector(
    [(state: RootState) => state.films, (state: RootState) => state.users.currentUser?.favoriteFilms || []],
    (films, favoriteFilms) => {
        return films?.films?.map(film => ({
            ...film,
            isFavorite: favoriteFilms.includes(film.id)
        }));
    }
);