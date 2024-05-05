import {Film} from '../../hooks/useGetFilms.hook.ts';
import React from 'react';

export interface FilmListProps extends React.HTMLAttributes<HTMLUListElement> {
    films: Film[],
    handler: (id: number) => void
}