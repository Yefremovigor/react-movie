import React from 'react';

import { IFilm } from '../../interface/IFilm.ts';


export interface FilmListProps extends React.HTMLAttributes<HTMLUListElement> {
    films: IFilm[],
}