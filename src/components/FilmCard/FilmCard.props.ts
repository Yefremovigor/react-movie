import React from 'react';

import { IFilm } from '../../interface/IFilm.ts';


export interface FilmCardProps extends React.HTMLAttributes<HTMLDivElement> {
    film: IFilm,
    addToFavoriteHandler: (id: string) => void
}