import {Film} from '../../hooks/useGetFilms.hook.ts';
import React from 'react';

export interface FilmCardProps extends React.HTMLAttributes<HTMLDivElement> {
    film: Film,
    addToFavoriteHandler: (id: number) => void
}