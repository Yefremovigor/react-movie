import React from 'react';

import { IFilm } from '@/interface';


export interface FilmCardProps extends React.HTMLAttributes<HTMLDivElement> {
    film: IFilm;
}