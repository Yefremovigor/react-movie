import React from 'react';

import {Film} from '../../hooks/useGetFilms.hook.ts';

export interface FilmListProps extends React.HTMLAttributes<HTMLUListElement> {
    films: Film[],
    handler: (id: number) => void
}