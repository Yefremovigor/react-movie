import React, { createContext } from 'react';

import {Films} from '../hooks/useGetFilms.hook.ts';
import { User } from '../hooks/useUserAuth.hook';

interface UserContextType {
    user: User | null;
    login: (userLogin: string) => void;
    logout: () => void;
    films: Films;
    setFilms: (newValue: Films | ((prevState: Films) => Films)) => void;
}

export const UserContext: React.Context<UserContextType> = createContext<UserContextType>({
    user: null,
    login: (userLogin: string) => {userLogin.length;},
    logout: () => {},
    films: [],
    setFilms(newValue: Films | ((prevState: Films) => Films)): void {newValue.length;}
});