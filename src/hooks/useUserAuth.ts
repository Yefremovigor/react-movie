import {useEffect, useState} from 'react';

import {useLocalStorage} from './';

export interface User {
    name: string,
    isLogined: boolean
}

export function useUserAuth() {
    const [users, saveUsers] = useLocalStorage<User[]>('users');
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (!users) {
            return;
        }
        const foundUser = users.find(user => user.isLogined) || null;
        setUser(foundUser);
    }, [users]);

    const login = (userLogin: string) => {
        if (!userLogin) {
            return;
        }

        if (!users) {
            saveUsers([{name: userLogin, isLogined: true}]);
        } else {
            const currentUser = users.find(user => user.name === userLogin);
            if (currentUser) {
                saveUsers(users.map(user => user.name === currentUser.name ? {...user, isLogined: true} : user));
            } else {
                saveUsers([...users, {name: userLogin, isLogined: true}]);
            }
        }
    };

    const logout = () => {
        setUser(null);
        if (users) {
            saveUsers(users.map(user => ({...user, isLogined: false})));
        }
    };

    return {
        user,
        login,
        logout
    };
}