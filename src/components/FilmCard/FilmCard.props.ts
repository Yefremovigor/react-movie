import React from 'react';

import {Film} from '../../hooks/useGetFilms.hook.ts';

export interface FilmCardProps extends React.HTMLAttributes<HTMLDivElement> {
    film: Film,
    addToFavoriteHandler: (id: number) => void
}