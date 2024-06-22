import React, { createContext } from 'react';

import { User } from '@/hooks';
import {IFilm} from '@/interface';

interface IUserContext {
    user: User | null;
    login: (userLogin: string) => void;
    logout: () => void;
    films: IFilm[];
    setFilms: (newValue: IFilm[] | ((prevState: IFilm[]) => IFilm[])) => void;
}

export const UserContext: React.Context<IUserContext> = createContext<IUserContext>({
    user: null,
    login: (userLogin: string) => {userLogin.length;},
    logout: () => {},
    films: [],
    setFilms(newValue: IFilm[] | ((prevState: IFilm[]) => IFilm[])): void {newValue.length;}
});