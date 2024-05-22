import React from 'react';

import {Film} from '../../interface/FilmInterface.ts';



export interface FilmListProps extends React.HTMLAttributes<HTMLUListElement> {
    films: Film[],
}