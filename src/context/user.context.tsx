import React, { createContext } from 'react';

import { User } from '../hooks/useUserAuth.hook';
import {Film} from '../interface/FilmInterface.ts';

interface UserContextType {
    user: User | null;
    login: (userLogin: string) => void;
    logout: () => void;
    films: Film[];
    setFilms: (newValue: Film[] | ((prevState: Film[]) => Film[])) => void;
}

export const UserContext: React.Context<UserContextType> = createContext<UserContextType>({
    user: null,
    login: (userLogin: string) => {userLogin.length;},
    logout: () => {},
    films: [],
    setFilms(newValue: Film[] | ((prevState: Film[]) => Film[])): void {newValue.length;}
});