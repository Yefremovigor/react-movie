import React from 'react';

import {Film} from '../../interface/FilmInterface.ts';



export interface FilmCardProps extends React.HTMLAttributes<HTMLDivElement> {
    film: Film,
    addToFavoriteHandler: (id: string) => void
}