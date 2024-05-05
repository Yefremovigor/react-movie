import React, { createContext } from 'react';
import { User } from '../hooks/useUserAuth.hook';

interface UserContextType {
    user: User | null;
    logoutHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export const UserContext: React.Context<UserContextType> = createContext<UserContextType>({
    user: null,
    logoutHandler: () => {}
});